
export const getPopular = (callback: Function) => {
	const url_popular = 'https://api.themoviedb.org/3/movie/popular?language=ru-RU&page=1';
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDFmMjA3NzQwMTRlZDhjOWU2YmJiNWJlNjE2ZmZhNCIsInN1YiI6IjY2MmY5MjdmMDNiZjg0MDEyYWViNTYxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eERH3BVTJkaJsNWjhij6zvUUA07Qq6kYgfV-BWStyVY'
		}
	};

	fetch(url_popular, options)
		.then(res => res.json())
		.then(data => callback(data.results));
}