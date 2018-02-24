<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="primary" glossy>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          McCtrl
          <div slot="subtitle">Controls Hue lamps, displays sensor data, system information</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      content-class="bg-grey-2"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Main Menu</q-list-header>
        <q-item @click.native="$router.push('/hue/control')">
          <q-item-side icon="highlight" />
          <q-item-main label="Hue" sublabel="Control Hue lamps" />
        </q-item>
        <q-item @click.native="$router.push('/sensors/diagnostic')">
          <q-item-side icon="device_hub" />
          <q-item-main label="Sensors" sublabel="Display sensor data" />
        </q-item>
        <q-item @click.native="$router.push('/system/information')">
          <q-item-side icon="perm_device_information" />
          <q-item-main label="System" sublabel="Display system information" />
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

export default {
  name: 'LayoutDefault',
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
  methods: {
    openURL,
  },
};
</script>

<style>

</style>
