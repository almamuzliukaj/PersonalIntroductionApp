import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

// --- Helper Components ---

// 1. Chip component for technical skills
const SkillChip = ({ icon, label, IconComponent = MaterialCommunityIcons }) => (
  <View style={styles.chip}>
    <IconComponent name={icon} size={14} color="#555" style={{ marginRight: 6 }} />
    <Text style={styles.chipText}>{label}</Text>
  </View>
);

// 2. Row component for hobbies/interests
const InfoRow = ({ icon, text }) => (
  <View style={styles.infoRow}>
    <Ionicons name={icon} size={20} color="#555" />
    <Text style={styles.infoText}>{text}</Text>
  </View>
);

// 3. Component for clickable contact links
const ContactLink = ({ icon, text, color, onPress }) => (
  <TouchableOpacity style={styles.contactLinkItem} onPress={onPress}>
    <Ionicons name={icon} size={24} color={color} />
    <Text style={[styles.contactLinkText, { color: color }]}>{text}</Text>
    <Ionicons name="open-outline" size={18} color={color} style={{ marginLeft: 'auto' }} />
  </TouchableOpacity>
);

// --- Main Application Component ---

export default function App() {
  // State to manage the visibility of contact links
  const [showContact, setShowContact] = useState(false); 

  // Function to toggle the state
  const toggleContact = () => {
    setShowContact(!showContact);
  };
  
  // Function to handle link clicks (Opens email client or browser)
  const handleLinkPress = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't open URL:", err));
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* HEADER SECTION with Gradient */}
        <View style={styles.headerContainer}>
          <LinearGradient
            colors={['#134E5E', '#71B280']} // Teal to Green Gradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.headerGradient}
          >
            <FontAwesome5 name="code" size={120} color="rgba(255,255,255,0.1)" style={styles.bgIcon} />
          </LinearGradient>
        </View>

        {/* PROFILE SECTION (Overlapping) */}
        <View style={styles.profileSection}>
          <View style={styles.imageContainer}>
            <Image
              source={require('./assets/ProfilePicture.jpeg')}
              style={styles.image}
              resizeMode="cover"
            />
          </View>

          {/* Name and Title */}
          <Text style={styles.title}>Muzliukaj</Text>
          <Text style={styles.subtitle}>Computer Science • Year 3</Text>
          
          {/* Main Action Button */}
          <View style={styles.actionRow}>
            <TouchableOpacity 
              style={[styles.primaryBtn, showContact && styles.primaryBtnActive]}
              activeOpacity={0.8}
              onPress={toggleContact} 
            >
              <Text style={styles.primaryBtnText}>
                {showContact ? 'Hide Contact Info' : 'Contact Me'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* EXPANDING CONTACT LINKS CONTAINER */}
        {showContact && ( 
          <View style={styles.contactLinksContainer}>
            <ContactLink 
              icon="mail" 
              text="almamuzliukaj@gmail.com" 
              color="#D44638" 
              onPress={() => handleLinkPress('mailto:almamuzliukaj@gmail.com')} 
            />
            <ContactLink 
              icon="logo-linkedin" 
              text="/in/almamuzliukaj" 
              color="#0077B5" 
              onPress={() => handleLinkPress('https://www.linkedin.com/in/almamuzliukaj')} 
            />
            <ContactLink 
              icon="logo-github" 
              text="/almamuzliukaj" 
              color="#1a2a33" 
              onPress={() => handleLinkPress('https://github.com/almamuzlukaj')} 
            />
          </View>
        )}

        {/* CONTENT CARDS */}
        <View style={styles.contentArea}>
          
          {/* Technical Skills - Using Chips */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Technical Skills</Text>
            <View style={styles.chipContainer}>
              <SkillChip icon="language-csharp" label="C# Development" />
              <SkillChip icon="database" label="Database Design" IconComponent={FontAwesome5} />
              <SkillChip icon="paint-brush" label="UI/UX Design" IconComponent={FontAwesome5} />
              <SkillChip icon="react" label="React Native" IconComponent={MaterialCommunityIcons} />
            </View>
          </View>

          {/* Hobbies & Interests - Using Info Rows */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Hobbies & Goals</Text>
            <InfoRow icon="basketball-outline" text="Basketball & Fitness" />
            <InfoRow icon="code-slash-outline" text="Building Full-Stack Applications" />
            <InfoRow icon="color-palette-outline" text="Creative Digital Design Projects" />
          </View>

        </View>

        <StatusBar style="light" />
      </ScrollView>
    </View>
  );
}


// --- Stylesheet (Complete) ---
const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#F5F7FA' },
  scrollContainer: { flexGrow: 1, paddingBottom: 50 },
  
  // Header Styles
  headerContainer: { 
    height: 200, 
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
  headerGradient: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  bgIcon: { position: 'absolute', right: -20, bottom: -20, transform: [{ rotate: '-15deg' }] },

  // Profile Styles
  profileSection: { alignItems: 'center', marginTop: -60 },
  imageContainer: { 
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  image: { width: 130, height: 130, borderRadius: 65, borderWidth: 4, borderColor: '#FFF' },
  title: { fontSize: 24, fontWeight: '800', color: '#1a2a33' },
  subtitle: { fontSize: 16, fontWeight: '500', color: '#7f8c8d', marginTop: 4 },

  // Button Styles
  actionRow: { marginTop: 20 },
  primaryBtn: { 
    backgroundColor: '#134E5E', 
    paddingVertical: 10, 
    paddingHorizontal: 30, 
    borderRadius: 25,
    shadowColor: '#134E5E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  primaryBtnActive: {
    backgroundColor: '#95a5a6', // Darker gray when active to show it's pressed/open
  },
  primaryBtnText: { color: '#FFF', fontWeight: '700' },

  // Contact Links Container
  contactLinksContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 20,
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contactLinkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  contactLinkText: {
    marginLeft: 15,
    fontSize: 15,
    fontWeight: '600',
  },

  // Content Area Styles
  contentArea: { padding: 20 },
  card: { 
    backgroundColor: '#FFF', 
    borderRadius: 15, 
    padding: 20, 
    marginBottom: 15, 
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionTitle: { fontSize: 18, fontWeight: '700', marginBottom: 15, color: '#134E5E' },
  chipContainer: { flexDirection: 'row', flexWrap: 'wrap' },
  chip: { 
    backgroundColor: '#E0F2F1', 
    padding: 8, 
    borderRadius: 15, 
    marginRight: 8, 
    marginBottom: 8, 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  chipText: { color: '#00695C', fontWeight: '600', fontSize: 14 },

  // Info Row Styles
  infoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  infoText: { marginLeft: 10, fontSize: 15, color: '#555' }
});