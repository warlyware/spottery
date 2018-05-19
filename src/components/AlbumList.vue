<template>
<div>
  <div class="ui basic modal">
  <i class="close icon"></i>
  <div class="header" v-if="selected">
    {{ selected.albumInfo.artists[0].name }} -- {{ selected.albumInfo.name }}
  </div>
  <div class="content">
    <div class="image">
      <img v-if="selected" :src="selected.albumInfo.images[1].url"
      width="album.albumInfo.images[1].width"
      height="album.albumInfo.images[1].height">
    </div>
  </div>
</div>
<div class="ui four stackable cards container">
  <div v-for="album in allAlbums" :key="album._id"
  class="ui fade reveal card">
    <a :href="album.albumInfo.external_urls.spotify"
    target="_blank"
    class="image visible content">
      <img :src="album.albumInfo.images[1].url"
      width="album.albumInfo.images[1].width"
      height="album.albumInfo.images[1].height">
    </a>
    <div style="width: album.albumInfo.images[1].width; height: album.albumInfo.images[1].height;"
    class="hidden content image">
      <img src="../assets/square.gif"
      width="album.albumInfo.images[1].width"
      height="album.albumInfo.images[1].height">
    </div>
  </div>
</div>
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AlbumList",
  data() {
    return {
      selected: null
    }
  },
  methods: {
    ...mapActions(["fetchAlbums"]),
    goToSpotify(url) {
      console.log(url);
      window.open(url, '_blank');
    },
    openModal(album) {
      console.log(album);
      this.selected = album;
      $('.modal').modal('show');
    }
  },
  computed: mapGetters(["allAlbums"]),
  created() {
    this.fetchAlbums();
  }
};
</script>

<style scoped>
</style>