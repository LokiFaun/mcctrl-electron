<template>
  <q-page class="row gutter-md">
    <q-card class="col-xs-6 col-sm-6 TOP LEFT">
      <q-card-title>
        Hue
        <div slot="right" class="row items-center">
          <q-icon name="highlight" />
        </div>
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        Control Hue lamps
      </q-card-main>
      <q-card-separator />
      <q-card-actions>
        <q-btn flat dense>
          On/Off
          <q-icon name="radio_button_checked"/>
        </q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="col-xs-6 col-sm-6 TOP RIGHT">
      <q-card-title>
        Sensors
        <div slot="right" class="row items-center">
          <q-icon name="device_hub" />
        </div>
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        Display sensor information
      </q-card-main>
      <q-card-separator />
    </q-card>
    <q-card class="col-xs-6 col-sm-6 BOTTOM RIGHT">
      <q-card-title>
        Weather
        <div slot="right" class="row items-center">
          <q-icon name="cloud" />
        </div>
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        Display weather forecast information
      </q-card-main>
      <q-card-separator />
    </q-card>
    <q-card class="col-xs-6 col-sm-6 BOTTOM LEFT">
      <q-card-title>
        System
        <div slot="right" class="row items-center">
          <q-icon name="perm_device_information" />
        </div>
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        Display system information
      </q-card-main>
      <q-card-separator />
    </q-card>
  </q-page>
</template>

<style>

</style>

<script>
export default {
  name: 'PageIndex',
};
</script>
