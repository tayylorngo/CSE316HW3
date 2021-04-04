import { gql } from "@apollo/client";

export const LOGIN = gql`
	mutation Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			email 
			_id
			firstName
			lastName
			password
			initials
		}
	}
`;

export const REGISTER = gql`
	mutation Register($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
		register(email: $email, password: $password, firstName: $firstName, lastName: $lastName) {
			email
			password
			firstName
			lastName
		}
	}
`;
export const LOGOUT = gql`
	mutation Logout {
		logout 
	}
`;

export const ADD_ITEM = gql`
	mutation AddItem($item: ItemInput!, $_id: String!) {
		addItem(item: $item, _id: $_id)
	}
	`;

export const ADD_ITEM_AT_INDEX = gql`
	mutation AddItemAtIndex($item: ItemInput!, $index: Int!, $_id: String!){
		addItemAtIndex(item: $item, index: $index, _id: $_id)
	}
`;

export const DELETE_ITEM = gql`
	mutation DeleteItem($itemId: String!, $_id: String!) {
		deleteItem(itemId: $itemId, _id: $_id) {
			_id
			id
			description
			due_date
			assigned_to
			completed
		}
	}
`;

export const UPDATE_ITEM_FIELD = gql`
	mutation UpdateItemField($_id: String!, $itemId: String!, $field: String!, $value: String!, $flag: Int!) {
		updateItemField(_id: $_id, itemId: $itemId, field: $field, value: $value, flag: $flag) {
			_id
			id
			description
			due_date
			assigned_to
			completed
		}
	}
`;

export const REORDER_ITEMS = gql`
	mutation ReorderItems($_id: String!, $itemId: String!, $direction: Int!) {
		reorderItems(_id: $_id, itemId: $itemId, direction: $direction) {
			_id
			id
			description
			due_date
			assigned_to
			completed
		}
	}
`;

export const ADD_TODOLIST = gql`
	mutation AddTodolist($todolist: TodoInput!) {
		addTodolist(todolist: $todolist) 
	}
`;

export const DELETE_TODOLIST = gql`
	mutation DeleteTodolist($_id: String!) {
		deleteTodolist(_id: $_id)
	}
`;

export const UPDATE_TODOLIST_FIELD = gql`
	mutation UpdateTodolistField($_id: String!, $field: String!, $value: String!) {
		updateTodolistField(_id: $_id, field: $field, value: $value)
	}
`;

export const MOVE_LIST_TO_TOP = gql`
    mutation MoveListToTop($_id: String!){
        moveListToTop(_id: $_id)
    }`
;

export const SORT_LIST = gql`
	mutation SortList($_id: String!, $field: String!){
		sortList(_id: $_id, field: $field){
			_id
			id
			description
			due_date
			assigned_to
			completed
		}
	}
`;
