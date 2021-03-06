import React from "react";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";

import { connect } from "react-redux";

function Profile(props) {
  const { currentUser, posts } = props;
  console.log({ currentUser, posts });
  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <Text>{currentUser.name}</Text>
        <Text>{currentUser.email}</Text>
      </View>

      <View style={styles.containerGallery}>
        <FlatList
          numColumns={3}
          horizontal={false}
          data={posts}
          renderItem={({ item }) => (
            <View style={styles.containerImage}>
              <Image style={styles.image} source={{ uri: item.downloadURL }} />
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
  containerInfo: {
    margin: 20,
    margin: 0,
    padding: 0,
  },
  containerGallery: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
  containerImage: {
    flex: 1 / 3,
    margin: 0,
    padding: 0,
  },
  image: {
    flex: 1,
    aspectRatio: 1 / 1,
    height: 100,
    margin: 0,
    padding: 0,
  },
});

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
  posts: store.userState.posts,
});

export default connect(mapStateToProps, null)(Profile);
