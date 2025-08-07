import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const SmartHomeLogin = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const togglePasswordVisibility = () => setHidePassword(!hidePassword);

  const handleLogin = () => {
    if (email && password) {
      navigation.navigate('Home');
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <LinearGradient
      colors={['#6C63FF', '#6549F0']}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.innerContainer}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/home.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>
            <Text style={styles.titleLight}>SMART </Text>
            <Text style={styles.titleBold}>HOME</Text>
          </Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputWrapper}>
            <Icon name="user" size={18} color="#aaa" style={styles.icon} />
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              placeholderTextColor="#aaa"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputWrapper}>
            <Icon name="lock" size={18} color="#aaa" style={styles.icon} />
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              placeholderTextColor="#aaa"
              secureTextEntry={hidePassword}
              style={styles.input}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Icon
                name={hidePassword ? 'eye-slash' : 'eye'}
                size={18}
                color="#aaa"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.signInBtn}
            onPress={handleLogin}
          >
            <Text style={styles.signInText}>SIGN IN</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.createBtn}
            onPress={() => alert('Create Account feature coming soon!')}
          >
            <Text style={styles.createText}>CREATE AN ACCOUNT</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    marginTop: 60,
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    tintColor: '#fff',
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  titleLight: {
    fontWeight: '300',
  },
  titleBold: {
    fontWeight: '700',
  },
  formContainer: {
    marginTop: 40,
    paddingHorizontal: 30,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff30',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 45,
    color: '#fff',
  },
  signInBtn: {
    backgroundColor: '#4B3EF0',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  signInText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  createBtn: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 15,
  },
  createText: {
    color: '#4B3EF0',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default SmartHomeLogin;
