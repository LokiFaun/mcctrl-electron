<template>
  <q-page class="flex flex-center">
    <q-card style='width: 80%'>
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
    <q-card style='width: 80%'>
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
    <q-card style='width: 80%'>
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
