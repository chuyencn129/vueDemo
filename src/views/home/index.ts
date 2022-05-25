import { Component, Vue } from 'vue-property-decorator';
import store from '@/store';

@Component({
  components: {
  },
})
export default class HomeView extends Vue {

	strSearch = "";
	contacts: any = [];

	created(){
		this.contacts = store.state.contacts;
	}

	handleClickItem(id: number){
		this.$router.push('/detail/' + id);
	}

	handleClickAdd(){
		this.$router.push('/add');
	}

	handleSearch(){
		this.contacts = this.$store.getters.search(this.strSearch);
	}
}