import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'

// class Weather extends Component {
//   render() {
//     return (
//       <View style={styels.container}>
//         <View style={styels.upper}>
//           <Text>Icon here</Text>
//           <Text style={styels.temp}>35</Text>
//         </View>
//         <View style={styels.lower}>
//           <Text style={styels.title}>Raining </Text>
//           <Text style={styels.subtitle}>For more info look outside</Text>
//         </View>
//       </View>
//     )
//   }
// }

const weatherCases = {
  Rain: {
    colors: '#00C6FB',
    title: 'Raining',
    subtitle: 'Raining For more info look outside'
  },
  Sunny: {
    colors: '#FEF253',
    title: 'Sunny',
    subtitle: 'Sunny For more info look outside'
  },
  Thunderstorm: {
    colors: '#00ECBC',
    title: 'Thunderstrom in the house',
    subtitle: 'Thunderstrom For more info look outside'
  },
  Clouds: {
    colors: '#D7D2CC',
    title: 'Clouds',
    subtitle: 'Clouds For more info look outside'
  },
  Snow: {
    colors: '#7DE2FC',
    title: 'Cold',
    subtitle: 'Cold For more info look outside'
  },
  Drizzle: {
    colors: '#89F7FE',
    title: 'Drizzle',
    subtitle: 'Drizzle For more info look outside'
  },
  Haze: {
    colors: '#89F7FE',
    title: 'Haze',
    subtitle: 'Haze For more info look outside'
  },
  Mist: {
    colors: '#89F7FE',
    title: 'Mist',
    subtitle: 'Mist For more info look outside'
  }
}

function Weather({ weatherName, temp }) {
  console.log(weatherName)
  return (
    //  <View style={[{flex:1}, {backgroundColor:{weatherCases[weatherName].color}}]}>
    // 불러오는 정보에 따라서 색상을 변경하고 싶은데 방법이 있을까요?
    <View style={styels.container}>
      <View style={styels.upper}>
        <Text>Icon here</Text>
        <Text style={styels.temp}>{temp}º</Text>
      </View>
      <View style={styels.lower}>
        <Text style={styels.title}>{weatherCases[weatherName].title} </Text>
        <Text style={styels.subtitle}>
          {weatherCases[weatherName].subtitle}
        </Text>
      </View>
      <View stye={{ backgroundColor: 'red', flex: 1 }} />
    </View>
  )
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
}

const styels = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: '#00C6FB'
    // backgroundColor: 'transparent'
  },
  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  temp: {
    fontSize: 48,
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  title: {
    fontSize: 38,
    backgroundColor: 'transparent', // 투명하게
    color: '#FFFFFF',
    marginBottom: 10,
    fontWeight: '300'
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    marginBottom: 50
  }
})

export default Weather
