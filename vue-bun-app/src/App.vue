<script setup lang="ts">
import { reactive, ref, computed } from 'vue'

const count = ref(0)
const double = computed(() => count.value * 2)

const myuser = ref({
  name: 'Jany Doe',
  age: 33,
})

const items = ref([1, 2, 3, 4, 5])

const user = reactive({
  name: 'John Doe',
  age: 25,
})

const showChild = ref(true)
const composableCount = ref(0)
const inputValue = ref('')

const childInfo = reactive({
  name: 'John Doe',
  age: 30,
  email: 'johndoe@example.com',
})
</script>

<template>
  <div class="main-container">
    <div class="card-container">
      <div class="card">
        <h2>Original Counter</h2>
        <div class="button-group">
          <button class="btn btn-danger" @click="count--">Decrement</button>
          <span class="count-display">{{ count }}</span>
          <button class="btn btn-success" @click="count++">Increment</button>
        </div>
        <div class="double-text">Double (x2): {{ double }}</div>
      </div>

      <div class="card">
        <h2>User Info</h2>
        <p>{{ user.name }} ({{ user.age }})</p>
        <p>{{ myuser.name }} ({{ myuser.age }})</p>

        <ul>
          <li v-for="item in items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>

    <hr class="divider" />

    <div class="new-feature-section">
      <button class="btn-toggle" @click="showChild = !showChild">Toggle Child Component</button>

      <div v-if="showChild" class="child-component">
        <h2>Child Component</h2>
        <h3>Hello from Parent Component!</h3>
        <p>Name: {{ childInfo.name }}</p>
        <p>Age: {{ childInfo.age }}</p>
        <p>
          Email: <span class="email-highlight">{{ childInfo.email }}</span>
        </p>
      </div>

      <div class="composable-section">
        <h2>Counter from Composable: {{ composableCount }}</h2>
        <button class="btn-inc" @click="composableCount++">Increment</button>
      </div>

      <div class="input-section">
        <h2>Input Element</h2>
        <input v-model="inputValue" type="text" class="input-box" placeholder="Type here..." />
        <p v-if="inputValue" class="preview-text">You typed: {{ inputValue }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.main-container {
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
}

.card-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  flex: 1;
  min-width: 250px;
}

.button-group {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
}
.btn {
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-weight: bold;
}
.btn-danger {
  background-color: #ff6b6b;
}
.btn-success {
  background-color: #51cf66;
}
.count-display {
  font-size: 24px;
  font-weight: bold;
}
.double-text {
  margin-top: 10px;
  font-size: 18px;
  background: rgba(0, 0, 0, 0.2);
  padding: 5px;
  border-radius: 4px;
  text-align: center;
}

.divider {
  margin: 30px 0;
  border: 1px solid #ddd;
}

.new-feature-section {
  background-color: #1a1a1a;
  color: #ccc;
  padding: 30px;
  border-radius: 15px;
}

.btn-toggle {
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
  padding: 8px 16px;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 14px;
}

.child-component h2,
.composable-section h2,
.input-section h2 {
  font-weight: normal;
  margin-bottom: 10px;
}
.email-highlight {
  background-color: #555;
  color: #fff;
  padding: 2px 6px;
  border-radius: 3px;
}
.composable-section,
.input-section {
  margin-top: 30px;
}
.btn-inc {
  background-color: #eee;
  border: 1px solid #999;
  padding: 5px 15px;
  cursor: pointer;
}
.input-box {
  background-color: #ccc;
  border: none;
  padding: 8px;
  width: 100%;
  max-width: 300px;
  font-size: 16px;
}
.preview-text {
  margin-top: 5px;
  font-size: 14px;
  color: #888;
}
</style>
