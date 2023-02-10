import {ref, onMounted} from 'vue';

export function useGeolocation () {
    const geoPosition = ref({})
    const geoPositionVivible = ref(false)

    const fetching = async () => {
        try {
            if (!navigator.geolocation) {
                console.log('Geolocation не поддерживается вашим браузером')
            } else {
                console.log('Определение местоположения…')  

                navigator.geolocation.getCurrentPosition((position)=>{
                    geoPosition.value = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    }
                    geoPositionVivible.value = true
                }, () => {
                    console.log('Невозможно получить ваше местоположение')
                });
            }
        } catch (e) {
            console.log(e);
        } finally {
            
        }
    }

    onMounted(fetching)

    return {
        geoPosition, geoPositionVivible
    }
}
