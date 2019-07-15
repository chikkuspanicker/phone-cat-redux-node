import React from 'react';

const PhoneListPage = (phone) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">

                    <p>
                        Search: <input />
                    </p>

                    <p>
                        Sort by:
        <select>
                            <option value="name">Alphabetical</option>
                            <option value="age">Newest</option>
                        </select>
                    </p>

                </div>
                <div className="col-md-10">

                    <ul className="phones">
                        <li className="thumbnail phone-list-item">
                            <a className="thumb">
                                <img src="{phone.imageUrl}" alt="{phone.name}" />
                            </a>
                            <a href="#!/phones/{{phone.id}}">{phone.name}</a>
                            <p>{phone.snippet}</p>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default PhoneListPage;