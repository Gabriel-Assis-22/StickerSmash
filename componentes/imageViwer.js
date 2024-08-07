import { StyleSheet, Image } from "react-native";

export default function ImageViewer({placeholderImageSource, selectedImage }){
    return (
        // <Image source={placeholderImageSource} style={styles.image} />
        <Image source={imageSource} style={styles.Image} />
    );
}

const imageSource = selectedImage  ? { uri: selectedImage } : placeholderImageSource;

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});