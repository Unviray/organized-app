import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { IconCheckCircle, IconError } from '@components/icons';
import { personCurrentDetailsState } from '@states/persons';
import { useAppTranslation } from '@hooks/index';
import { displaySnackNotification } from '@services/recoil/app';
import { dbPersonsSave } from '@services/dexie/persons';
import { personAssignmentsRemove } from '@services/app/persons';

const useButtonActions = () => {
  const { id } = useParams();

  const { t } = useAppTranslation();

  const isNewPerson = id === undefined;

  const person = useRecoilValue(personCurrentDetailsState);

  const isPersonDisqualified = person.person_data.disqualified.value;
  const isPersonArchived = person.person_data.archived.value;

  const [isDisqualify, setIsDisqualify] = useState(false);
  const [isQualify, setIsQualify] = useState(false);

  const handleDisqualify = () => setIsDisqualify(true);

  const handleDisqualifyCancel = () => setIsDisqualify(false);

  const handleQualify = () => setIsQualify(true);

  const handleQualifyCancel = () => setIsQualify(false);

  const handleSavePerson = async () => {
    try {
      await dbPersonsSave(person, isNewPerson);

      if (isNewPerson) {
        displaySnackNotification({
          header: t('tr_personAdded'),
          message: t('tr_personAddedDesc'),
          severity: 'success',
          icon: <IconCheckCircle color="var(--white)" />,
        });
      }

      if (!isNewPerson) {
        displaySnackNotification({
          header: t('tr_personSaved'),
          message: t('tr_personSavedDesc'),
          severity: 'success',
          icon: <IconCheckCircle color="var(--white)" />,
        });
      }
    } catch (error) {
      await displaySnackNotification({
        header: t('tr_errorTitle'),
        message: error.message,
        severity: 'error',
        icon: <IconError color="var(--white)" />,
      });
    }
  };

  const handleDisqualifyConfirm = async () => {
    try {
      const newPerson = structuredClone(person);
      newPerson.person_data.disqualified = {
        value: true,
        updatedAt: new Date().toISOString(),
      };
      personAssignmentsRemove(newPerson);

      await dbPersonsSave(newPerson);
    } catch (error) {
      await displaySnackNotification({
        header: t('tr_errorTitle'),
        message: error.message,
        severity: 'error',
        icon: <IconError color="var(--white)" />,
      });
    }
  };

  const handleQualifyConfirm = async () => {
    try {
      const newPerson = structuredClone(person);
      newPerson.person_data.disqualified = {
        value: false,
        updatedAt: new Date().toISOString(),
      };
      await dbPersonsSave(newPerson);
      setIsQualify(false);
    } catch (error) {
      await displaySnackNotification({
        header: t('tr_errorTitle'),
        message: error.message,
        severity: 'error',
        icon: <IconError color="var(--white)" />,
      });
    }
  };

  return {
    handleSavePerson,
    handleDisqualifyConfirm,
    isNewPerson,
    isDisqualify,
    handleDisqualify,
    handleDisqualifyCancel,
    isPersonDisqualified,
    handleQualifyConfirm,
    handleQualify,
    handleQualifyCancel,
    isQualify,
    isPersonArchived,
  };
};

export default useButtonActions;
