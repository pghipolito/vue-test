<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Update Data</h3> <br>
            <form @submit.prevent="onUpdateForm">
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
                    <input type="text" class="form-control" v-model="type.description" required>
                </div> <br>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Update Data</button>
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
        name: 'typeEdit',
        data() {
            return {
                type: {
                },
                success: '',
            }
        },
        created() {
            let dbRef = firestore.collection('agile').doc(this.$route.params.id);
            dbRef.get().then((doc) => {
                this.type = doc.data();
            }).catch((error) => {
                console.log(error)
            })
        },
        methods: {
            onUpdateForm(event) {
                event.preventDefault()
                firestore.collection('agile').doc(this.$route.params.id)
                .update(this.type).then(() => {
                    // this.$router.push('/list')
                    this.success = 'Data Updated!';
                    setTimeout( () => this.$router.push({ path: '/list'}), 2000);
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>