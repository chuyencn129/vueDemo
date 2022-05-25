import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    components: {
    },
})

export default class ContactForm extends Vue {
    @Prop({default: function () {
        return {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            emailAddress: "",
        };
    }}) contact?: any;


    handleChanContact(){
        this.$emit("change-info", this.contact);
    }
}