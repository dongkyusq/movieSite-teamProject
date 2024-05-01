
const fetchData = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDdjM2E5NTI2YTU3NzhiMzE0NzBmOTRiZjNhNTBhMiIsInN1YiI6IjY2MjViOTY1NjJmMzM1MDEzMWQ3NmI4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-66TRfv5_e2cKiMh5hxDpVFBWQLsa6hWTCzAB64WOwc'
        }
    };
    const results = [];


    for (let i = 1; i <= 2; i++) {
        const urls = [
            {
                url: `https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=${i}`,
                key: 'top_rated'
            },
            {
                url: `https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=${i}`,
                key: 'now_playing'
            },
            {
                url: `https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=${i}`,
                key: 'upcoming'
            }
        ];

        for (const { url, key } of urls) {
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error(`Network response was not ok for ${url}${i}`);
                }
                const data = await response.json();
                results.push({ [key]: data.results });
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        }

    }

    // 각 key에 해당하는 값을 합치기
    const mergedResults = {};
    results.forEach(item => {
        const key = Object.keys(item)[0];
        if (!mergedResults[key]) {
            mergedResults[key] = [];
        }
        mergedResults[key] = mergedResults[key].concat(item[key]);
    });

    return mergedResults;
};


const fetchMovieData = async () => {
    try {
        const movies = await fetchData(); // fetchData는 외부 모듈에서 가져오거나 정의된 함수  
        console.log(movies);
    } catch (error) {
        console.error('Error generating movie cards:', error);
    }
}

fetchMovieData();

export {fetchData, fetchMovieData};