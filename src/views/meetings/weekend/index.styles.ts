import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    height: '100%',
    width: '100%',
    fontFamily: 'Inter',
  },
  header: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: '#6876BE',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  headerTittle: {
    color: '#FEFEFE',
    fontWeight: 'medium',
    fontSize: 14,
  },
  headerCongregation: {
    color: '#FEFEFE',
    fontWeight: 'medium',
    fontSize: 12,
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    borderBottom: '1px solid #D5DFFD',
    borderRight: '1px solid #D5DFFD',
    borderLeft: '1px solid #D5DFFD',
  },
  date: {
    backgroundColor: '#F2F5FF',
    width: 56,
    paddingLeft: 4,
    paddingRight: 4,
    borderRight: '1px solid #D5DFFD',
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'semibold',
  },
  dateText: {
    color: '#3B4CA3',
    fontSize: 9,
    textAlign: 'center',
  },
  meetingParts: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    paddingTop: 8,
    paddingBottom: 8,
    width: 215,
  },
  meetingRole: {
    width: 90,
    color: '#757575',
    fontSize: 9,
  },
  name: {
    color: '#222222',
    fontSize: 10,
    width: 125,
  },
  roleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineHorizontal: {
    width: 215,
    borderBottom: '1px solid #D5DFFD',
  },
  lineVertical: {
    marginTop: 10,
    marginBottom: 10,
    borderLeft: '1px solid #D5DFFD',
  },
  speechContainer: {
    width: 244,
    justifyContent: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    gap: 4,
  },
  titleContainer: {
    width: 244,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  speechTitle: {
    width: 200,
    color: '#3B4CA3',
    fontSize: 10,
    fontWeight: 'semibold',
  },
  speechNumber: {
    color: '#AAAAAA',
    fontSize: 10,
    fontWeight: 'medium',
  },
  speakerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  speaker: {
    fontSize: 10,
    fontWeight: 'medium',
    color: '#222222',
  },
  mainSpeaker: {
    fontSize: 10,
    fontWeight: 'medium',
    color: '#222222',
  },
  congregation: {
    fontSize: 10,
    fontWeight: 'light',
    color: '#222222',
  },
  substituteSpeaker: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    gap: 2,
    backgroundColor: '#F2F5FF',
    borderRadius: 2,
    flexWrap: 'wrap',
  },
  substitute: {
    fontSize: 8,
    fontWeight: 'light',
    color: '#222222',
  },
  substituteName: {
    fontSize: 8,
    fontWeight: 'medium',
    color: '#222222',
  },
});

export default styles;