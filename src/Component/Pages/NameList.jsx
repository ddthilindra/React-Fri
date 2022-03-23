import React, { useEffect, useState } from "react";
import Namelistitem from "./NameListItem";
import Headerbar from "../Header/HeaderBar";

const Namelist = () => {
    const [loadData,setLoadData]=useState(false);
  const [nameList, setNameList] = useState([
    {
      id: "1",
      name: {
        title: "mr",
        first: "brad",
        last: "gibson",
      },
      location: {
        city: "kilcoole",
      },
      email: "brad.gibson@example.com",
      dob: {
        date: "1993-07-20T09:44:18.674Z",
        age: 26,
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
      },
    },
    {
      id: "2",
      name: {
        title: "mr",
        first: "AAAAAAAAA",
        last: "aaaaaaaaaaaaaa",
      },
      location: {
        city: "kilcoole",
      },
      email: "brad.gibson@example.com",
      dob: {
        date: "1993-07-20T09:44:18.674Z",
        age: 26,
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/men/85.jpg",
      },
    },
  ]);

  const nameListComponent = () => {
    return nameList.map((aName) => {
      return (
        <Namelistitem
          id={aName.id}
          name={`${aName.name.first}  ${aName.name.last}`}
          city={aName.location.city}
          email={aName.email}
          dob={aName.dob.date}
          avatar={aName.picture.medium}
        />
      );
    });
  };

  const addUserHandler = () => {
    // const newUser = {
    //   id: "2",
    //   name: {
    //     title: "mr",
    //     first: "BBBBB",
    //     last: "bbbbbbbbbbbb",
    //   },
    //   location: {
    //     city: "kilcoole",
    //   },
    //   email: "brad.gibson@example.com",
    //   dob: {
    //     date: "1993-07-20T09:44:18.674Z",
    //     age: 26,
    //   },
    //   picture: {
    //     medium: "https://randomuser.me/api/portraits/med/men/95.jpg",
    //   },
    // };
    // //setNameList((nameList) =>nameList.concat(newUser));

    // //spred oparator
    // setNameList((nameList) => [...nameList, newUser]);

    setLoadData(true);
  };

  //calle when page load and updating the state
  useEffect(() => {
    fetch("https://randomuser.me/api").then((response) => {
      return response.json();
    }).then((responseData)=>{
        // console.log(responseData.results[0])
        setNameList((nameList)=>[...nameList,responseData.results[0]])
    });
  },[loadData]); //[]stop the loop
  
  return (
    <div>
      <div className="container mt-4">
        <button
          type="button"
          class="btn btn-primary mb-2"
          onClick={addUserHandler}
        >
          Add user
        </button>
        <ul className="list-group">{nameListComponent()}</ul>
      </div>

      {/* <ul>{nameListComponent()}</ul> */}

      {/* <Namelistitem
        name={`${nameList[0].name.first}  ${nameList[0].name.last}`}
        city={nameList[0].location.city}
        email={nameList[0].email}
        dob={nameList[0].dob.date}
        avatar={nameList[0].picture.medium}
      /> */}
    </div>
  );
};

export default Namelist;
