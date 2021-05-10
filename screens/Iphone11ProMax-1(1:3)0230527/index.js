import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b508/2a57/e8dc48782f2ca6247091491e316ae51c"
        }}
        style={styles.ImageBackground_2_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/975c/8e7d/b3ed66bee68843e83bcfefc6d146abe0"
        }}
        style={styles.ImageBackground_2_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55bd/ea84/c38a1a01c9f1ac0b8112ffc1fff3c253"
        }}
        style={styles.ImageBackground_2_10}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63bb/ee6d/7a3613aa83ce64e6706cb0241b1659d8"
        }}
        style={styles.ImageBackground_2_7}
      />
      <View style={styles.View_2_8}>
        <Text style={styles.Text_2_8}>8:35</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33ee/d7b5/e85b5eb4e8c25e3b867b9df35df2b305"
        }}
        style={styles.ImageBackground_2_15}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e0d/8fa2/8b75d1fa8c21015c9637dfca33c56bcf"
        }}
        style={styles.ImageBackground_2_12}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/562d/7232/47e3f9de0df4029525e007224931688b"
        }}
        style={styles.ImageBackground_2_16}
      />
      <View style={styles.View_2_17}>
        <Text style={styles.Text_2_17}>Get Started</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26fb/9515/f5d7afa2e1b0b9d26f4366b6f25d449c"
        }}
        style={styles.ImageBackground_2_19}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_2_3: {
    width: wp("5.072463768115942%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.26570048309179%")
  },
  ImageBackground_2_5: {
    width: wp("4.830917874396135%"),
    height: hp("1.7759562841530054%"),
    top: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.512077294686%")
  },
  ImageBackground_2_10: {
    width: wp("48.309178743961354%"),
    height: hp("27.322404371584703%"),
    top: hp("-10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-11.352657004830919%")
  },
  ImageBackground_2_7: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.74396135265701%")
  },
  View_2_8: {
    width: wp("6.521739130434782%"),
    top: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3478260869565215%")
  },
  Text_2_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_15: {
    width: wp("91.78743961352657%"),
    height: hp("50.68306010928961%"),
    top: hp("34.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    resizeMode: "cover"
  },
  ImageBackground_2_12: {
    width: wp("48.309178743961354%"),
    height: hp("27.322404371584703%"),
    top: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-24.154589371980677%")
  },
  ImageBackground_2_16: {
    width: wp("77.29468599033817%"),
    height: hp("8.19672131147541%"),
    top: hp("104.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.352657004830919%")
  },
  View_2_17: {
    width: wp("22.463768115942027%"),
    top: hp("107.37704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.88888888888889%")
  },
  Text_2_17: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_19: {
    width: wp("12.077294685990339%"),
    height: hp("2.0491803278688523%"),
    top: hp("94.94535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.96135265700483%")
  },
  View_2: { height: 896 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
