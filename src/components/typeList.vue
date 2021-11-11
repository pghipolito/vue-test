<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="type in Datas" :key="type.key">
                        <td>{{ type.typeName }}</td>
                        <td>{{ type.name }}</td>
                        <td>{{ type.description }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: type.key }}" class="btn btn-primary">Edit
                            </router-link>
                            <button @click.prevent="deleteUser(type.key)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="success"> 
            {{ this.success }}
        </div>
    </div>
</template>

<script>
    import { firestore } from '../firebaseDb';
    
    export default {
        name: 'typeList',
        data() {
            return {
                Datas: [],
                success: '',
            }
        },
        created() {
            firestore.collection('agile').onSnapshot((snapshotChange) => {
                this.Datas = [];
                snapshotChange.forEach((doc) => {
                    this.Datas.push({
                        key: doc.id,
                        typeName: doc.data().typeName,
                        name: doc.data().name,
                        description: doc.data().description
                    })
                });
            })
        },
        methods: {
            deleteUser(id){
              if (window.confirm("Do you really want to delete?")) {
                firestore.collection("agile").doc(id).delete().then(() => {
                  this.success = 'Data Deleted!';
                })
                .catch((error) => {
                    console.error(error);
                })
              }
            }
        }
    }
</script>

<style>
    .btn-primary {
        margin-right: 12px;
    }

    .table .btn {
        width: 100%;
        margin-bottom: 5px;
    }
</style>