<template>
    <div class="movies-wrapper">
        <div class="movie-box">
            <div class="movie-title">
                <h3>Movie Title here</h3>
                <img src="../assets/1.jpg" alt="New Title"/>
            </div>
        </div>
        <div class="movie-box">
            <div class="movie-title">
                <h3>Movie Title here</h3>
                <img src="../assets/1.jpg" alt="New Title"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .movies-wrapper {
        margin: 10px auto;
        padding: 10px;
    }
    .movie-box {
        width: 30%;
        float: left;
        overflow: hidden;
        border: 1px solid #aaa;
        margin-right: 5px;
    }
</style>