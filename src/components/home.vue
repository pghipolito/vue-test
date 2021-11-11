<template>
 <div class="row justify-content-center">
    <div class="col-md-12">
      <div class="home">
        <h1 id="value"> The Four Values of The Agile Manifesto </h1>
        <div v-for="(value, index) in values" :key="value.key">
          <div class="content"> <b> {{ index + 1 }}. {{ value.name }} </b> - {{value.description}} </div>
        </div>
        <br>
        <h1> The Twelve Agile Manifesto Principles </h1>
        <div v-for="(principle, index) in principles" :key="principle.key">
          <div class="content"> <b> {{ index + 1 }}. {{ principle.name }} </b> - {{principle.description}} </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import { firestore } from '../firebaseDb';
    
    export default {
        name: 'home',
        data() {
            return {
                values: [],
                principles: [],
                success: '',
            }
        },
        created() {
            firestore.collection('agile').where("typeName", "==", "values").onSnapshot((snapshotChange) => {
                this.values = [];
                snapshotChange.forEach((doc) => {
                    this.values.push({
                        key: doc.id,
                        typeName: doc.data().typeName,
                        name: doc.data().name,
                        description: doc.data().description
                    })
                });
            })
            firestore.collection('agile').where("typeName", "==", "principles").onSnapshot((snapshotChange) => {
                this.principles = [];
                snapshotChange.forEach((doc) => {
                    this.principles.push({
                        key: doc.id,
                        typeName: doc.data().typeName,
                        name: doc.data().name,
                        description: doc.data().description
                    })
                });
            })
        },
    }
</script>

<style>
    h1 {
      font-size: 25px;
      text-transform: uppercase;
      letter-spacing: .5px;
      font-weight: bold;
      margin-bottom: 25px;
    }

    .content {
      font-size: 15px;
      margin: 10px 0;
    }

</style>