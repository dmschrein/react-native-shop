import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useToast } from "@/hooks/use-toast";
import { FontAwesome } from "@expo/vector-icons";

const PhotoUpload = ({ label }: { label: string }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const { toast } = useToast();

  const handleUpload = () => {
    // Handle image picking using expo-image-picker
    toast({
      title: "Coming soon",
      description: "Image upload will be implemented later",
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Pressable onPress={handleUpload} style={styles.uploadArea}>
        <FontAwesome name="upload" size={24} color="#666" />
        <Text style={styles.uploadText}>Tap to upload photo</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 300,
    alignSelf: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 8,
  },
  uploadArea: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
    gap: 8,
  },
  uploadText: {
    color: "#666",
    fontSize: 14,
  },
});

export default PhotoUpload;
