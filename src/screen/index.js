import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import api from "../config/base";

export default function Home() {
  const [valueDolar, setValueDolar] = useState([]);
  const [valueEuro, setValueEuro] = useState([]);
  const [changeReal, onChangeReal] = useState(0);
  const [changeDolar, onChangeDolar] = useState(0);
  const [changeEuro, onChangeEuro] = useState(0);
  const [newDolar, setNewDolar] = useState("");
  const [newEuro, setNewEuro] = useState("");
  const [value, onChangeText] = useState("");

  useEffect(() => {
    api.get().then((resp) => setValueDolar(resp.data.USD));
    api.get().then((resp) => setValueEuro(resp.data.EUR));
  }, []);

 useEffect(() => {
  }, [changeReal,changeDolar,changeEuro]); 

  /* console.log(changeReal)
  console.log(changeDolar)
  console.log(changeEuro)
  console.log(value)
 */

const { ask: valueSearchDolar, name: nameSearchDolar } = valueDolar;
const { ask: valueSearchEuro, name: nomeEuro } = valueEuro;

  const alterarReal = (texto) => {
    onChangeReal(texto)
    console.log(`valor do dolar ${valueSearchDolar} / valor do real ${changeReal} `)
    onChangeDolar( changeReal / valueSearchDolar)
    onChangeEuro( changeReal / valueSearchEuro)
  };
  const alterarDolar = (texto) => {
    onChangeDolar(texto)  
    onChangeReal( changeReal / texto )
    onChangeEuro( valueSearchEuro / texto )
  };
  const alterarEuro = (texto) => {
    onChangeEuro(texto) 
    onChangeReal(texto / valueSearchEuro)
    onChangeDolar(texto / valueSearchDolar)
  };

 

  /* const newValueCurrency = () => {
    if (value == "real") {
      const nwd = valueSearchDolar * changeReal;
      const nwe = valueSearchEuro * changeReal;
      onChangeDolar(nwd);
      onChangeEuro(nwe);
      onChangeText("");
    }
    if (value == "dolar") {
      const nwd = valueSearchDolar * changeReal;
      const nwe = valueSearchEuro * changeReal;
      console.log(valueSearchDolar)
      onChangeReal(valueSearchDolar);
      onChangeEuro(nwe);
    }
  };
 */
  return (
    <View style={styles.container}>
      <View style={styles.instructions}>
        <MaterialIcons name="attach-money" size={30} color="black" />
        <Text style={styles.nameInstructions}>Conversor</Text>
        <MaterialIcons name="attach-money" size={30} color="black" />
      </View>
      <View style={styles.iconMoney}>
        <MaterialIcons name="attach-money" size={80} color="black" />
      </View>

      <View style={styles.viewMoeda}>
        <Text style={styles.textMoeda}>R$ Real</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.inputMoeda}
          onChangeText={(text) => alterarReal(text)}
          value={changeReal}
        />
        <Text style={styles.textMoeda}>$ Dólar</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.inputMoeda}
          onChangeText={(text3) => alterarDolar(text3)}
          value={changeDolar}
        />
        <Text style={styles.textMoeda}>€ Euro</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.inputMoeda}
          onChangeText={(text2) => alterarEuro(text2)}
          value={changeEuro}
        />
      </View>

      <Text style={styles.welcome}>{valueSearchDolar}</Text>
      <Text style={styles.welcome}>{nameSearchDolar}</Text>
      <Text style={styles.welcome}>{valueSearchEuro}</Text>
      <Text style={styles.welcome}>{nomeEuro}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#190718",
  },
  welcome: {
    fontSize: 20,
    color: "#F6CEF5",
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#FFBF00",
    marginTop: 0,
    height: 50,
  },
  nameInstructions: {
    fontWeight: "600",
    color: "black",
    fontSize: 32,
  },
  iconMoney: {
    position: "relative",
    alignSelf: "center",
    borderRadius: 80,
    backgroundColor: "#FFBF00",
    marginTop: 20,
    width: 80,
  },
  iconMoneyInterno: {
    padding: 30,
  },
  textMoeda: {
    color: "#F6CEF5",
    marginLeft: 10,
    marginTop: 10,
  },
  inputMoeda: {
    height: 40,
    borderColor: "#FFBF00",
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    color: "#F6CEF5",
    borderRadius: 5,
    padding: 5,
  },
  viewMoeda: {
    marginTop: 5,
  },
});
