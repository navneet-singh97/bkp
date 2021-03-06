import {StyleSheet, Dimensions} from 'react-native';
import {color} from '../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.appGreen,
    // justifyContent: "center",
    // alignItems: "center",
  },
  logo: {
    width: windowWidth / 2.6,
    height: windowWidth / 2.6,
    marginBottom: 6,
  },
  appName: {fontSize: 26, color: 'black'},
  subContainer: {
    flex: 1,
    flexDirection: 'column',
    // alignItems: "center",
    paddingTop: windowWidth * 0.16,
    // justifyContent: "center",
  },
  welcomeText: {
    color: color.text,
    fontFamily: 'CenturyGothic-Bold',
    fontSize: windowWidth * 0.066,
    alignSelf: 'center',
  },
  errorTextStyle: {
    fontFamily: 'CenturyGothic',
    color: color.error,
    fontSize: windowWidth * 0.036,
    alignSelf: 'center',
    //marginLeft: windowWidth * 0.0769,
    // marginTop: 0.016,
  },
  inputView: {
    flexDirection: 'column',
    // paddingVertical: windowWidth * 0.01,
    paddingHorizontal: windowWidth * 0.031,
    borderRadius: windowWidth * 0.09,
    backgroundColor: 'white',
    marginTop: windowWidth * 0.13,
    width: windowWidth * 0.76,
    alignSelf: 'center',
  },
  textInputStyle: {
    height: windowWidth * 0.151,
    fontSize: windowWidth * 0.041,
    fontFamily: 'CenturyGothic-Bold',
    //textAlign: "center",
    //backgroundColor: "pink",
    borderColor: 'blue',
    paddingLeft: windowWidth * 0.04,
  },
  pinStyle: {
    backgroundColor: color.lightGrey,
    borderColor: color.lightGrey,
    borderWidth: 0,
    opacity: 0.6,
    height: windowWidth * 0.03,
    width: windowWidth * 0.03,
  },
  pinActiveStyle: {
    backgroundColor: 'black',
    borderColor: 'black',
    borderWidth: 1,
    opacity: 1,
    height: windowWidth * 0.03,
    width: windowWidth * 0.03,
  },
  pinContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
  },
  eyeIcon: {
    fontSize: windowWidth * 0.079,
    color: color.text,
    alignSelf: 'center',
    marginTop: windowWidth * 0.03,
    marginBottom: windowWidth * 0.13,
  },
  noteText: {
    fontSize: windowWidth * 0.036,
    color: color.text,
    fontFamily: 'CenturyGothic-Bold',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: windowWidth * 0.06,
  },
  resendOtp: {
    fontSize: windowWidth * 0.0416,
    color: color.secondaryColor,
    fontFamily: 'CenturyGothic-Bold',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: windowWidth * 0.06,
  },
  userImage: {
    width: windowWidth * 0.26,
    height: windowWidth * 0.26,
    alignSelf: 'center',
    borderRadius: (windowWidth * 0.26) / 2,
  },
  userImageView: {
    width: windowWidth * 0.31,
    height: windowWidth * 0.31,
    borderRadius: (windowWidth * 0.31) / 2,
    alignSelf: 'center',
    marginTop: windowWidth * 0.03,
  },
  smallText: {
    fontSize: windowWidth * 0.049,
    color: color.text,
    fontFamily: 'CenturyGothic',
    alignSelf: 'center',
    marginTop: windowWidth * 0.036,
    marginHorizontal: windowWidth * 0.16,
    textAlign: 'center',
  },
  button: {
    width: windowWidth / 2.19,
    height: windowWidth * 0.16,
    borderRadius: windowWidth * 0.076,
    borderWidth: 0,
    marginTop: windowWidth * 0.06,
    alignSelf: 'center',
  },
  buttonText: {
    color: color.textColor,
    fontSize: windowWidth * 0.049,
    alignSelf: 'center',
    fontFamily: 'CenturyGothic-Bold',
  },
});
