<script context="module">
  import axios from "axios";

  export async function getPets() {
    const res = await axios.get("http://localhost:3000/pet/all");
    console.log(res.data);

    return res.data;
  }

  export async function getNames() {
    const res = await axios.get("http://localhost:3000/pet/all");
    return res.data.map((a) => a.name);
  }

  export async function delPet(pet_id) {
    const res = await axios.delete(`http://localhost:3000/pet/${pet_id}`);
    console.log(res);
  }

  export async function addPet(pet_name) {
    const res = await axios.post(`http://localhost:3000/pet/create`, {
      name: `${pet_name}`,
    });
  }
</script>
