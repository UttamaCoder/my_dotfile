#!/usr/bin/env bash

battery(){
	status="$(acpi | cut -d ':' -f2- | cut -d ',' -f1 | awk '{print $1}')"
	if [ "$status" == "Discharging" ];
		then icon=""
	elif [ "$status" == "Charging" ];
		then icon=""
	else
		icon=""
	fi

	bat=$(acpi | cut -d ',' -f2 | cut -d '%' -f1)
	if (( $bat == 100 ))
		then batIcon=" "
	elif (( $bat >= 75 ))
		then batIcon=" "
	elif (( $bat >= 50 ))
		then batIcon=" "
	elif (( $bat >= 25 ))
		then batIcon=" "
	elif (( $bat >= 0 ))
		then batIcon=" "
	fi

	echo "$icon$bat% $batIcon"
}

volume(){
	vol=$(pactl get-sink-volume @DEFAULT_SINK@ | cut -d "/" -f2 | sed -n "1p" | awk '{print $1}' | cut -d "%" -f1)
	if (( $vol >= 50 ))
		then icon="󰕾 "
	elif (( $vol > 0 ))
		then icon="󰖀 "
	elif (( $vol == 0 ))
		then icon="󰕿 "
	fi
	vol="$vol%"

	if [ "$(pactl get-sink-mute 0)" == "Mute: yes" ]
		then icon="󰖁 " && vol="muted"
	fi

	echo "$icon$vol"
}

brightness(){
	val=$(sudo ybacklight -get | cut -d "." -f1)
	if (( $val >= 75 ))
		then icon="󰃠 "
	elif (( $val >= 50 ))
		then icon="󰃝 "
	elif (( $val >= 25 ))
		then icon="󰃟 "
	elif (( $val >= 0 ))
		then icon="󰃞 "
	fi

	echo "$icon $val%"
}

date_t(){
  echo "󰃭 $(date '+%d %b, %A')"
}
time_t(){
  echo " $(date '+%I:%M %P')"
}

sep(){
	echo ""
}

xsetroot -name " $(brightness) $(sep) $(volume) $(sep) $(battery) $(sep) $(date_t) $(sep) $(time_t) "
# echo " $(brightness) $(sep) $(volume) $(sep) $(battery) $(sep) $(calendar) "
