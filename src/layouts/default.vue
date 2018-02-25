<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="primary" glossy>
        <q-btn
          flat
          dense
          @click="leftDrawerOpen = !leftDrawerOpen"
        >
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          McCtrl
          <div slot="subtitle">Controls Hue lamps, displays sensor data, system information</div>
        </q-toolbar-title>
        <div>{{now.toLocaleString("de-DE")}}</div>
        <q-btn flat dense @click="$router.push('/')">
          <q-icon name="home" />
        </q-btn>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      content-class="bg-dark"
    >
      <q-list
        no-border
        link
        inset-delimiter
        dark
      >
        <q-list-header>Main Menu</q-list-header>
        <q-item @click.native="$router.push('/')">
          <q-item-side icon="home" />
          <q-item-main label="Home" sublabel="Dashboard" />
        </q-item>
        <q-item @click.native="$router.push('/hue/control')">
          <q-item-side icon="highlight" />
          <q-item-main label="Hue" sublabel="Control Hue lamps" />
        </q-item>
        <q-item @click.native="$router.push('/sensors/diagnostic')">
          <q-item-side icon="device_hub" />
          <q-item-main label="Sensors" sublabel="Display sensor data" />
        </q-item>
        <q-item @click.native="$router.push('/weather/forecast')">
          <q-item-side icon="cloud" />
          <q-item-main label="Weather" sublabel="Display weather forecast" />
        </q-item>
        <q-item @click.native="$router.push('/system/information')">
          <q-item-side icon="perm_device_information" />
          <q-item-main label="System" sublabel="Display system information" />
        </q-item>
        <q-item-separator />
        <q-item class="fixed-bottom" @click.native="close()">
          <q-item-side icon="close" />
          <q-item-main label="Close" sublabel="Close the application" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';
import { ipcRenderer } from 'electron';

export default {
  name: 'LayoutDefault',
  data() {
    return {
      leftDrawerOpen: false,
      now: new Date(),
    };
  },
  methods: {
    openURL,
    close() {
      ipcRenderer.send('app-cmd', 'close');
    },
  },
};
</script>

<style>

</style>
