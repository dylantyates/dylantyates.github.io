import {useLazyQuery} from '@apollo/client';
import { GET_ANIMALS } from '../queries';

interface Animal {
    id: number;
    type: string;
    name: string;
    age: number;
    nickname: string;
    birthMonth: string;
    image: string;
}

function renderAnimals(animals: [Animal]) {
    return animals.map(({ id, name }) => (
        <div key={id} className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
            <img
                src="https://place-hold.it/140x140"
                alt="Album" />
            </figure>
            <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Details</button>
            </div>
            </div>
        </div>
        )
    )
}

function Button() {
    const [getAnimals, { loading, error, data }] = useLazyQuery(GET_ANIMALS);

    if (error) {
        return (<div>{error.message}</div>)
    }

    return (
        <>
            {loading && (
                <div>   
                    <code>Loading...</code>
                </div>
            )}
            <div>
                <button className="btn btn-primary" onClick={() => getAnimals()}>All</button>
            </div>
            {data && (renderAnimals(data.animals))}
        </>
    )
}

export default Button