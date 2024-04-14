#!/bin/bash

while true; do

wal=$(echo "arch-black-4k.png
everforest-walls_awesomewm_green.png
everforest-walls_fog_forest_1.jpg
everforest-walls_foggy_valley_1.png
everforest-walls_japanese_pedestrian_street.jpg
everforest-walls_japanese_store.jpg
everforest-walls_japanese_street_shop.png
everforest-walls_ocean_front_1.png
everforest-walls_rocky_beach_1.jpg
forest_foggy_misty.png
forest_hut.jpg
forest_stairs.jpg
home_at_the_end_of_the_world.jpg
mandelbrot_gap_sky.png
mist_forest_nord.jpg
nord-floating-saturn-4k-with-imagegonord-v0-yz7wjl308gkb1.png
pixelart_evening_house_stars_constilation.png
pixelart_evening_trees_pole_wires_makrustic.png
pixelart_flower_clouds_castle.png
pixelart_france_house_police-car.jpg
pixelart_mountains_archer_bow.png
pixelart_mountains_dark_sky.png
pixelart_night_stars_clouds_trees_cozy_PixelArtJourney.png
pixelart_night_stars_clouds_trees_cozy_PixelArtJourney_catppuccin.png
pixelart_night_stars_shooting-star_river_boat_couple_relaxing.png
pixelart_night_stars_shooting-star_river_boat_couple_relaxing_catppuccin_mocha.png
pixelart_night_train_cozy_gas_RoyalNaym_catppuccin_mocha.png
pixelart_road_forest_mysterious_tower.png
pixelart_seabeach_evening.png
pixelart_sky_clouds_stars_moon.jpg
pixelart_thron_dark_someone.png
starfield-themed-minimal-wallpaper-3840x2160-with-v0-d0znuqcxq8lb1.png
tokyo-night10.png
wallhaven-d6mg33.png
wallhaven-jxrrmp.jpg
wallhaven-kxj3l1.jpg
wallhaven-kxro37.png
wallhaven-wewvxp.jpg" | shuf | sed -n "1p")

feh --bg-fill "/home/adi/Downloads/wallpapers/$wal"
sleep 60
done
