<script setup lang="ts"></script>

<template>
  <h1>Footer</h1>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
      <div class="container">
        <a class="navbar-brand fw-bold fs-4" href="#">Furniture</a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Service</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>

          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

    <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="0"
          class="active"
        ></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
      </div>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://placehold.co/1920x600/e0e0e0/333333?text=Furniture+Banner+1"
            class="d-block w-100"
            alt="Furniture 1"
            style="height: 500px; object-fit: cover"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://placehold.co/1920x600/e0e0e0/333333?text=Furniture+Banner+2"
            class="d-block w-100"
            alt="Furniture 2"
            style="height: 500px; object-fit: cover"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://placehold.co/1920x600/e0e0e0/333333?text=Furniture+Banner+3"
            class="d-block w-100"
            alt="Furniture 3"
            style="height: 500px; object-fit: cover"
          />
        </div>
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
<style></style>
