import React from 'react';
import MyInput from "./UI/input/myInput";
import MySelect from "./UI/select/mySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                placeholder="Поиск..."
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />

            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка по"
                options ={[
                    {value: 'title', name: "По названию"},
                    {value: 'body', name: "По содержанию"}
                ]}/>
        </div>
    );
};

export default PostFilter;