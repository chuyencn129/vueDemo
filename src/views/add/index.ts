import ContactForm from '@/components/ContactForm/ContactForm.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    "contact-form": ContactForm,
  },
})

export default class AddView extends Vue {
    contactData: any;

    handleChangeInfo(Info: any){
        this.contactData = Info;
    }

    handleAddNew(){
        if(this.contactData){
            this.$store.commit('addNew', this.contactData);
            this.$router.push('/');
            this.$message({
                message: 'Successfully added.',
                type: 'success'
            });
        }
        
    }
}