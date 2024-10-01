import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/EvilIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Esquema de validação com Yup
const validationSchema = Yup.object({
  produto: Yup.string().required("Nome do produto é obrigatório"),
  dose: Yup.number().required("Dose é obrigatória"),
  intervalo: Yup.number().required("Intervalo é obrigatório"),
  quantidadePorCaixa: Yup.number().required("Quantidade por caixa é obrigatória"),
  quantidadeCaixas: Yup.number().required("Quantidade de caixas é obrigatória"),
});

export default function MedAdd() {
  const navigation = useNavigation();
  const [time, setTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowPicker(false);
    setTime(currentTime);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Animatable.View animation="fadeInUpBig" style={styles.containerForm}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Icon name="close" size={40} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.message}>Medicamento</Text>
            
          </View>

          <Text style={styles.timeNumber}>{time.toLocaleTimeString()}</Text>
          <TouchableOpacity onPress={() => setShowPicker(true)}>
            <Text style={styles.timeButton}>Selecionar horário da primeira dosagem</Text>
          </TouchableOpacity>

          <Formik
            initialValues={{
              produto: '',
              dose: '',
              intervalo: '',
              diasUso: '',
              quantidadePorCaixa: '',
              quantidadeCaixas: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log("Valores enviados:", values);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <TextInput
                  placeholder="Produto: (Nome)"
                  style={styles.timeText}
                  onChangeText={handleChange('produto')}
                  onBlur={handleBlur('produto')}
                  value={values.produto}
                />
                <ErrorMessage name="produto" component={Text} style={styles.errorText} />

                <TextInput
                  placeholder="Dosagem: (Comprimido/Gotas)"
                  style={styles.timeText}
                  keyboardType="numeric"
                  onChangeText={handleChange('dose')}
                  onBlur={handleBlur('dose')}
                  value={values.dose}
                />
                <ErrorMessage name="dose" component={Text} style={styles.errorText} />

                <TextInput
                  placeholder="Intervalo entre dosagens: (Horas)"
                  style={styles.timeText}
                  keyboardType="numeric"
                  onChangeText={handleChange('intervalo')}
                  onBlur={handleBlur('intervalo')}
                  value={values.intervalo}
                />
                <ErrorMessage name="intervalo" component={Text} style={styles.errorText} />

                <TextInput
                  placeholder="Dias de uso:"
                  style={styles.timeText}
                  keyboardType="numeric"
                  onChangeText={handleChange('diasUso')}
                  onBlur={handleBlur('diasUso')}
                  value={values.diasUso}
                />
                <ErrorMessage name="diasUso" component={Text} style={styles.errorText} />

                <TextInput
                  placeholder="Quantidade por Caixa:"
                  style={styles.timeText}
                  keyboardType="numeric"
                  onChangeText={handleChange('quantidadePorCaixa')}
                  onBlur={handleBlur('quantidadePorCaixa')}
                  value={values.quantidadePorCaixa}
                />
                <ErrorMessage name="quantidadePorCaixa" component={Text} style={styles.errorText} />

                <TextInput
                  placeholder="Quantidade de Caixas:"
                  style={styles.timeText}
                  keyboardType="numeric"
                  onChangeText={handleChange('quantidadeCaixas')}
                  onBlur={handleBlur('quantidadeCaixas')}
                  value={values.quantidadeCaixas}
                />
                <ErrorMessage name="quantidadeCaixas" component={Text} style={styles.errorText} />

                <TouchableOpacity onPress={handleSubmit}>
                  <Text style={styles.submitButton}>Adicionar Medicamento</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>

          {showPicker && (
            <DateTimePicker
              value={time}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={onChange}
              style={styles.time}
            />
          )}
        </Animatable.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#613CF0",
  },
  scrollView: {
    flexGrow: 1,
  },
  icon: {
    marginTop: 15,
    marginBottom: 15,
    position: "absolute",
  },
  icon2: {
    marginTop: 15,
    marginBottom: 15,
    position: "absolute",
    color: "#613CF0",
  },
  message: {
    marginTop: 15,
    marginBottom: 15,
    fontSize: 28,
    fontWeight: "bold",
    margin: "auto",
  },
  containerForm: {
    flex: 1,
    padding: '5%',
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  timeText: {
    borderBottomWidth: 1,
    padding: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    marginHorizontal: "auto",
    marginBottom: 10,
    width: '100%',
    fontSize: 18,
    color: "#333",
  },
  timeButton: {
    backgroundColor: "#613CF0",
    fontSize: 20,
    fontWeight: 'bold',
    color: "white",
    textAlign: 'center',
    borderBottomWidth: 1,
    borderRadius: 5,
    width: '90%',
    padding: 10,
    marginBottom: 40,
    margin: 'auto',
  },
  timeNumber: {
    margin: "auto",
    fontSize: 50,
    color: "#333",
  },
  button: {
    position: 'absolute',
    right: 45,
    top: -7,
  },
  submitButton: {
    backgroundColor: "#613CF0",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    padding: 15,
    textAlign: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});