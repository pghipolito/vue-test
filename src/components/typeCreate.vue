<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Add Agile Types</h3> <br>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Type</label>
                    <select v-model="type.typeName" id="type" required class="form-control">
                        <option value="values">Values</option>
                        <option value="principles">Principles</option>
                    </select>
                </div> <br>

                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="type.name" required>
                </div> <br>

                <div class="form-group">
                    <label>Description</label>
                    <input type="text" class="form-control" v-model="type.description">
                </div> <br>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Add type</button>
                </div>
            </form>
            <div class="success"> 
                {{ this.success }}
            </div>
        </div>
    </div>
</template>

<script>
    import { firestore } from '../firebaseDb';

    export default {
        name: 'typeCreate',
        data() {
            return {
                type: {
                   typeName: 'values',
                   name: '',
                   description: '',
                },
                success: '',
            }
        },
        methods: {
            onFormSubmit(event) { 
                event.preventDefault();
                this.success = 'Data Added!';
                firestore.collection('agile').add(this.type).then(() => {
                    setTimeout(function(){ location.reload() }, 1000);
                    this.user.typeName = ''
                    this.user.name = ''
                    this.user.description = ''
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>