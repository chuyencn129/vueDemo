import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {
    },
  })
export default class DetailView extends Vue {
    contactDetail = null;
    
    created(){
        let id = -1;
        id = parseInt(this.$route.params.id);
        if(id >= 0){
            this.contactDetail = this.$store.getters.getContact(id);
        }
    }

    handleClickDelete(){
        if(this.contactDetail != null){
            this.$store.commit('delete', this.contactDetail['id']);
            this.$router.push('/');
            this.$message({
                message: 'Delete successfully.',
                type: 'success'
            });
        }
    }

    handleClickEdit(){
        if(this.contactDetail != null){
            this.$router.push('/edit/' + this.contactDetail['id']);
        }
    }
}