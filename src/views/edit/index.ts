import ContactForm from '@/components/ContactForm/ContactForm.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    "contact-form": ContactForm,
  },
})

export default class EditView extends Vue {
    contactDetail: any;

    created(){
        let id = -1;
        id = parseInt(this.$route.params.id);
        if(id >= 0){
            this.contactDetail = this.$store.getters.getContact(id);
        }
    }

    handleChangeInfo(Info: any){
        this.contactDetail = Info;
    }

    handleSave(){
        if(this.contactDetail){
            this.$store.commit('update', this.contactDetail);
            this.$router.push('/');
            this.$message({
                message: 'Successfully added.',
                type: 'success'
            });
        }
        
    }
}