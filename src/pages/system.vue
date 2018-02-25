<template>
  <q-page padding class="row">
    <q-list class="col-4">
      <q-list-header>Version</q-list-header>
      <q-item>
        <q-list>
          <q-item>
            <q-item-main label="McCtrl" :sublabel="appVersion" />
          </q-item>
          <q-item>
            <q-item-main label="Electron" :sublabel="electronVersion" />
          </q-item>
          <q-item>
            <q-item-main label="Node" :sublabel="nodeVersion" />
          </q-item>
          <q-item>
            <q-item-main label="V8" :sublabel="v8Version" />
          </q-item>
          <q-item>
            <q-item-main label="Chrome" :sublabel="chromeVersion" />
          </q-item>
        </q-list>
      </q-item>
    </q-list>
    <q-list class="col-4">
      <q-list-header>Memory</q-list-header>
      <q-item>
        <q-list>
          <q-item>
            <q-item-main label="Total Memory" :sublabel="totalMemory" />
          </q-item>
          <q-item>
            <q-item-main label="Free Memory" :sublabel="freeMemory" />
          </q-item>
        </q-list>
      </q-item>
    </q-list>
    <q-list class="col-4">
      <q-list-header>Platform</q-list-header>
      <q-item>
        <q-list>
          <q-item>
            <q-item-main label="Platform" :sublabel="platform" />
          </q-item>
          <q-item>
            <q-item-main label="Architecture" :sublabel="architecture" />
          </q-item>
          <q-item>
            <q-item-main label="Version" :sublabel="release" />
          </q-item>
        </q-list>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import * as packageInfo from '../../package.json';
import * as os from 'os';

const bytesToString = (bytes) => {
  let bytesString = '';
  if (bytes > 1000000000) {
    bytesString = `${bytes / 1000000000} GB`;
  } else if (bytes > 1000000) {
    bytesString = `${bytes / 1000000} MB`;
  } else {
    bytesString = bytes.toString();
  }

  return bytesString;
};

export default {
  name: 'PageSystem',
  data() {
    return {
      electronVersion: process.versions.electron,
      nodeVersion: process.versions.node,
      v8Version: process.versions.v8,
      chromeVersion: process.versions.chrome,
      appVersion: packageInfo.version,
      totalMemory: bytesToString(os.totalmem()),
      freeMemory: bytesToString(os.freemem()),
      platform: os.platform(),
      architecture: os.arch(),
      release: os.release(),
    };
  },
};
</script>

<style>

</style>
