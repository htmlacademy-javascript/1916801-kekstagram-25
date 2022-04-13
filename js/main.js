import { dataLoaded } from './render-photos.js';
import { setOverlayForm, validateForm, setUserFormSubmit } from './form.js';
import { setScaleSizePhoto, setScaleEffectsPhoto } from './set-effects-photo.js';
import { onError } from './message.js';
import { getData } from './api.js';
import { rendersAlternative } from './filters.js';
getData(dataLoaded, onError, rendersAlternative);
validateForm();
setOverlayForm();
setScaleSizePhoto();
setScaleEffectsPhoto();
setUserFormSubmit();
