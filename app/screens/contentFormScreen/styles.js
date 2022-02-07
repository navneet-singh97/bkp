import {StyleSheet, Dimensions} from 'react-native';
import {color} from './../../theme/color';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primaryBgColour,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  topContainer: {
    flex: 0.1,
    backgroundColor: color.primaryBgColour,
  },
  multiBtn: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: windowWidth * 0.0136,
    margin: windowWidth * 0.0136,
    backgroundColor: 'pink',
  },
  multiBtnText: {
    fontSize: windowWidth * 0.0376,
    color: color.textColor,
    fontFamily: 'CenturyGothic',
    padding: windowWidth * 0.0163,
    paddingHorizontal: windowWidth * 0.036,
  },
  activeMultiBtn: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: windowWidth * 0.0136,
    margin: windowWidth * 0.0136,
  },
  bottomContainer: {
    flex: 0.9,
    backgroundColor: color.primaryBgColour,
  },
  boxView: {
    backgroundColor: color.background,
    borderRadius: windowWidth * 0.036,
    marginHorizontal: windowWidth * 0.036,
    padding: windowWidth * 0.0136,
    paddingVertical: windowWidth * 0.06,
    marginTop: windowWidth * 0.06,
    borderWidth: 0.36,
    borderColor: color.greyBg,
  },
  activeMultiBtn: {
    borderWidth: 0,
    borderColor: 'black',
    borderRadius: windowWidth * 0.0136,
    margin: windowWidth * 0.0136,
    opacity: 0.6,
  },
  commonBlackTitle: {
    fontFamily: 'CenturyGothic-Bold',
    color: color.blackText,
    marginHorizontal: windowWidth * 0.036,
    fontSize: windowWidth * 0.0496,
  },
  commonGreyTitle: {
    fontFamily: 'CenturyGothic',
    color: color.greyText,
    fontWeight: '900',
    marginHorizontal: windowWidth * 0.036,
    fontSize: windowWidth * 0.0436,
  },
  subTitle: {
    fontFamily: 'CenturyGothic',
    color: 'black',
    fontWeight: '900',
    marginHorizontal: windowWidth * 0.036,
    fontSize: windowWidth * 0.0436,
  },
  row: {
    width: windowWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: windowWidth * 0.036,
    paddingLeft: windowWidth * 0.016,
  },
  rowImage: {
    width: windowWidth * 0.136,
    height: windowWidth * 0.136,
    borderRadius: (windowWidth * 0.136) / 2,
  },
  instructorName: {
    fontFamily: 'CenturyGothic',
    color: color.blackText,
    fontWeight: '900',
    fontSize: windowWidth * 0.0436,
  },
  ratingText: {
    fontFamily: 'CenturyGothic',
    color: color.blackText,
    fontWeight: '600',
    fontSize: windowWidth * 0.0436,
  },
  activityIcon: {
    fontSize: windowWidth * 0.0936,
    color: color.text,
    alignSelf: 'center',
  },
  listTitle: {
    fontFamily: 'CenturyGothic',
    color: color.blackText,
    fontWeight: '900',
    fontSize: windowWidth * 0.0416,
  },
  iconView: {
    width: windowWidth * 0.096,
    height: windowWidth * 0.096,
    borderRadius: (windowWidth * 0.96) / 2,
    backgroundColor: color.greyBg,
  },
  rowText: {
    fontFamily: 'CenturyGothic',
    color: color.blackText,
    fontWeight: '900',
    fontSize: windowWidth * 0.0416,
    marginLeft: windowWidth * 0.036,
  },
  rowIcon: {
    fontSize: windowWidth * 0.0516,
    color: color.blackText,
    alignSelf: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: windowWidth * 0.01963,
  },
  searchBarContainer: {
    backgroundColor: color.primaryBgColour,
    width: windowWidth,
    borderBottomWidth: 0,
    marginTop: windowWidth * 0.036,
  },
  inputContainer: {
    //borderBottomWidth: 0,
    //borderRadius: windowWidth * 0.036,
    //backgroundColor: color.inputBgClr,
    // shadowColor: 'black',
    // shadowOpacity: 0.1,
    // shadowOffset: {width: 1, height: 1},
    // shadowRadius: 1,
    // elevation: 0.16,
    marginBottom: -windowWidth * 0.036,
  },
  inputStyle: {
    fontFamily: 'CenturyGothic',
    fontSize: windowWidth * 0.0416,
  },
  inputLabel: {
    fontFamily: 'CenturyGothic-Bold',
    color: color.blackText,
    marginLeft: windowWidth * 0.036,
    fontSize: windowWidth * 0.0416,
    marginBottom: -windowWidth * 0.006,
  },
  dropdownArrow: {
    color: color.greyText,
    fontSize: windowWidth * 0.06,
    alignSelf: 'center',
  },
  sepDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowWidth * 0.036,
  },
  inputDropdownStyle: {
    fontFamily: 'CenturyGothic',
    fontSize: windowWidth * 0.0416,
    marginVertical: windowWidth * 0.036,
    marginLeft: windowWidth * 0.0136,
    color: color.lightGrey,
  },
  inputDropdownLabel: {
    fontFamily: 'CenturyGothic',
    color: 'black',
    fontWeight: '900',
    fontSize: windowWidth * 0.0416,
    marginBottom: -windowWidth * 0.006,
  },
  menuRowStyle: {
    borderBottomWidth: 0.96,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
