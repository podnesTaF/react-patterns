import React from "react";
import includeUpdatableResource from "./include-updatable-resource";

const UserForm = includeUpdatableResource(
  ({user, onChangeUser, onPostUser, onResetUser}) => {
    const { name, age } = user || {};

    return user ? (
    <div>
        <label>
            Name:
            <input value={name} onChange={e => onChangeUser({name: e.target.value})} />
        </label>
        <label>
            Age:
            <input type="number" value={age} onChange={e => onChangeUser({age: +e.target.value})} />
        </label>
        <button onClick={onResetUser}>Reset</button>
        <button onClick={onPostUser}>Save</button>
    </div>
    ) : <h3>Loading...</h3>;
  },
  "/users/3", "user"
);

export default UserForm;
