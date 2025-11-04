import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Profile Image */}
        <Image
          source={require('./assets/ProfilePicture.jpeg')}
          style={styles.image}
          resizeMode="cover"
        />

        {/* Name and Major */}
        <Text style={styles.title}>Alma Muzliukaj</Text>
        <Text style={styles.subtitle}>3rd Year Computer Science</Text>

        {/* Skills Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Skills & Interests</Text>
          <Text style={styles.item}>• C# Development</Text>
          <Text style={styles.item}>• Database Design</Text>
          <Text style={styles.item}>• UI/UX Design</Text>
        </View>

        {/* Goals / Hobbies Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Goals & Hobbies</Text>
          <Text style={styles.item}>🏀 Basketball & Fitness</Text>
          <Text style={styles.item}>💻 Building Full-Stack Applications</Text>
          <Text style={styles.item}>🎨 Creative Design Projects</Text>
        </View>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#E0F7FA', // gradient-like soft light blue
    justifyContent: 'center',
    paddingVertical: 50,
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#20633cff', // rich navy border
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#20633cff', // rich navy for name
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 17,
    color: '#333333', // dark gray
    marginBottom: 30,
  },
  sectionContainer: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal: 25,
    marginVertical: 12,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: '600',
    color: '#00695C', // deep teal
    marginBottom: 12,
    textAlign: 'center',
  },
  item: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 8,
    lineHeight: 24,
  },
});
