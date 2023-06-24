import { useState } from "react"
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

function App() {
  const [list, setList] = useState<any>([])
  const [text, setText] = useState<any>('')
  const [ind, setInd] = useState<any>()

  const add = () => {
    if (ind > -1) {
      list[ind] = text
      setList([...list])
      setInd(null)
    } else {
      setList([...list, text])
    }
    setText('')
  }
  const del = (i: number) => {
    list.splice(i, 1)
    console.log(list)
    setList([...list])
  }
  const edit = (i: number) => {
    setInd(i)
    setText(list[i])
  }

  return <>
    <View style={styles.container}>
      <View style={styles.header}>
        <Image resizeMode="contain" style={{ width: 50, height: 50 }} source={{ uri: 'https://to-do-cdn.microsoft.com/static-assets/c87265a87f887380a04cf21925a56539b29364b51ae53e089c3ee2b2180148c6/icons/logo.png' }} />
      </View>
      <View style={styles.body}>
        <TextInput value={text} onChangeText={(e) => setText(e)} style={styles.inp} placeholder="Enter Task ..." />
        {/* <Button title="Add" /> */}
        <TouchableOpacity onPress={add} style={styles.btn}>
          <Text style={styles.btnText}>Add</Text>
        </TouchableOpacity>
        <View>
          <ScrollView style={{ height: 500 }}>
            {list.map((x: any, i: number) => <View style={{ borderWidth: 2, borderColor: 'lightgrey', borderRadius: 10, padding: 5, marginVertical: 5 }}>
              <Text style={{ padding: 5, fontSize: 20 }} key={i}>{x}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => edit(i)} style={[styles.btn, { marginHorizontal: 10, paddingHorizontal: 30 }]}>
                  <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => del(i)} style={[styles.btn, { marginHorizontal: 10, paddingHorizontal: 30 }]}>
                  <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>)}
          </ScrollView>
        </View>
      </View>

    </View>
  </>
}

const styles = StyleSheet.create({
  pera: {
    fontSize: 25,
    color: '#003566'
  },
  container: {
    height: '100%',
    backgroundColor: 'white'
  },
  header: {
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  },
  inp: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#003566',
    padding: 10,
    fontSize: 20,
    borderRadius: 8
  },
  body: {
    padding: 15,
    paddingVertical: 25
  },
  btn: {
    backgroundColor: '#003566',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 10,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  px: {
    paddingHorizontal: 10,
    marginHorizontal: 5
  }
})


export default App