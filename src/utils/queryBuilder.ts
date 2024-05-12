interface IProps {
	baseQuery: string;
	queryObject: { [key: string]: string | number } | null;
}

const queryBuilder = ({ baseQuery, queryObject }: IProps) => {
	const query = new URL(baseQuery, window.location.pathname);

	if (queryObject) {
		Object.entries(queryObject).forEach((queryItem) => {
			const [key, value] = queryItem;
			query.searchParams.append(key, String(value));
		});
	}

	const decodedQueryString = decodeURIComponent(query.toString());

	return decodedQueryString.replace(window.location.pathname, "");
};

export default queryBuilder;