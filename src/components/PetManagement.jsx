import React, { Component } from "react";
import agent from "../services/petManagementService";
import ListPetsByOwnerGender from "./ListPetsByOwnerGender";

export default class PetManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petData: [],
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const petData = await agent.PetData.list();
      this.setState({ petData, loading: false });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        console.log("Pets data not found");
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { petData, loading } = this.state;
    const { petType, petDisplayField, ownerGenders } = this.props;
    if (loading === true) {
      return <h1>Loading ...</h1>;
    } else if (petData.length === 0) {
      return <h1>No Pet Data found !!!</h1>;
    } else {
      return (
        <>
          <h1>Names of the {petType} by the gender of their owner</h1>
          {ownerGenders.map((ownerGender, index) => (
            <ListPetsByOwnerGender
              key={index}
              petData={petData}
              ownerGender={ownerGender}
              petType={petType}
              petDisplayField={petDisplayField}
            />
          ))}
        </>
      );
    }
  }
}
