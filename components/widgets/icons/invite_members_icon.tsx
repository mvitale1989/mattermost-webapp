// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {useIntl} from 'react-intl';

export default function InviteMembersIcon(props: React.HTMLAttributes<HTMLSpanElement>) {
    const {formatMessage} = useIntl();
    return (
        <span {...props}>
            <svg
                width='126px'
                height='38px'
                viewBox='0 0 126 38'
                role='img'
                aria-label={formatMessage({id: 'generic_icons.invite_members', defaultMessage: 'Invite Members Icon'})}
            >
                <path d='M 108.83398 0.03515625 C 108.64165 0.03515625 108.4496 0.04983111 108.25977 0.08203125 C 109.08339 0.57981559 109.86736 1.165576 110.60156 1.8359375 C 113.34699 4.3426243 115.07813 7.1515117 115.07812 10.777344 L 115.07812 15.908203 C 115.07812 17.577458 114.81586 19.392207 114.32812 21.453125 C 114.19039 22.035006 114.02467 22.601886 113.83008 23.152344 C 116.57398 24.811724 118.17106 25.88194 118.62109 26.361328 C 120.0119 27.842823 120.78516 29.798054 120.78516 31.830078 L 120.78516 32 C 122.99178 32 124.78125 32.008356 124.78125 30.001953 C 124.78125 26.755542 122.78085 23.90476 118.77734 21.453125 L 118.46875 21.267578 L 118.46094 21.285156 C 118.44384 21.330296 118.43871 21.318446 118.44531 21.253906 L 118.46875 21.267578 L 118.47266 21.251953 C 118.52056 21.104379 118.6246 20.690139 118.78516 20.011719 C 119.2074 18.22759 119.07227 17.224165 119.07227 15.908203 L 119.07227 10.777344 C 119.07227 8.5210935 117.78998 3.8565489 115.79297 2.0332031 C 113.81134 0.22387865 111.50192 0.03515625 108.83594 0.03515625 L 108.83398 0.03515625 z M 100.84375 2.0332031 C 98.23721 2.0332031 95.848767 2.9659792 93.835938 4.7363281 C 91.761167 6.5611731 90.535156 8.4793085 90.535156 10.777344 L 90.535156 15.908203 C 90.535156 17.293336 90.80759 18.870238 91.328125 20.703125 C 91.751681 22.194536 92.389981 23.518449 93.25 24.634766 L 87.810547 27.792969 C 87.734577 27.827779 87.659451 27.865141 87.585938 27.904297 C 87.562827 27.916627 87.538385 27.928746 87.515625 27.941406 C 87.254658 28.067724 87.009242 28.216755 86.775391 28.382812 L 86.509766 28.574219 C 85.454567 29.323561 84.826172 30.535879 84.826172 31.830078 L 84.826172 33.994141 C 84.826172 36.20075 86.615661 37.992188 88.822266 37.992188 L 112.79492 37.992188 C 115.00153 37.992188 116.79102 36.20075 116.79102 33.994141 L 116.79102 31.830078 C 116.79102 30.814065 116.40241 29.834497 115.70703 29.09375 C 115.33382 28.696209 114.89968 28.36777 114.42188 28.113281 L 114.13867 27.962891 C 114.10527 27.945041 114.06897 27.932866 114.03516 27.916016 C 113.99746 27.894746 113.96392 27.869949 113.92578 27.849609 L 108.53711 24.673828 C 109.43906 23.498248 110.06724 22.107856 110.43945 20.535156 C 110.86169 18.751027 111.08203 17.224166 111.08203 15.908203 L 111.08203 10.777344 C 111.08203 8.5210941 109.90325 6.6104541 107.90625 4.7871094 C 105.92461 2.977785 103.50974 2.0332043 100.84375 2.0332031 z M 100.84375 6.0273438 C 102.50853 6.0273438 103.96628 6.5982778 105.21484 7.7382812 C 106.46343 8.878286 107.08789 9.8906745 107.08789 10.777344 L 107.08789 15.908203 C 107.08789 16.870874 106.90948 18.105944 106.55273 19.613281 C 106.19601 21.12062 105.52977 22.279175 104.55469 23.089844 C 104.24552 23.343181 104.012 23.661015 103.85742 24.041016 C 103.70244 24.421017 103.65168 24.811463 103.69922 25.216797 C 103.72302 25.622132 103.84065 25.997842 104.05469 26.339844 C 104.26872 26.681846 104.54401 26.953582 104.87695 27.15625 L 112.04492 31.375 C 112.09262 31.40033 112.13432 31.425832 112.16992 31.451172 C 112.20552 31.476502 112.23401 31.488281 112.25781 31.488281 L 112.54297 31.640625 C 112.63817 31.691295 112.72361 31.754092 112.79492 31.830078 L 112.79492 33.994141 L 88.822266 33.994141 L 88.822266 31.830078 L 89.089844 31.640625 C 89.196862 31.564625 89.297447 31.513613 89.392578 31.488281 C 89.416398 31.462951 89.439071 31.442357 89.462891 31.429688 C 89.486711 31.416988 89.513289 31.412109 89.537109 31.412109 L 96.921875 27.117188 C 97.254845 26.939854 97.526184 26.681846 97.740234 26.339844 C 97.954274 25.997845 98.073886 25.622132 98.097656 25.216797 C 98.145256 24.811463 98.089577 24.421017 97.935547 24.041016 C 97.780967 23.661012 97.562734 23.343179 97.277344 23.089844 C 96.302254 22.279177 95.599958 21.120619 95.171875 19.613281 C 94.743792 18.105943 94.529297 16.870874 94.529297 15.908203 L 94.529297 10.777344 C 94.529297 9.8906751 95.178468 8.8782834 96.474609 7.7382812 C 97.770749 6.5982776 99.22654 6.0273453 100.84375 6.0273438 z M 21 7.9707031 C 20.447715 7.9707031 20 8.4184181 20 8.9707031 C 20 9.5229881 20.447715 9.9707031 21 9.9707031 L 69 9.9707031 C 69.552285 9.9707031 70 9.5229881 70 8.9707031 C 70 8.4184181 69.552285 7.9707031 69 7.9707031 L 21 7.9707031 z M 1 17.970703 C 0.4477153 17.970703 -2.220446e-16 18.418418 0 18.970703 C 0 19.522988 0.4477153 19.970703 1 19.970703 L 63 19.970703 C 63.552285 19.970703 64 19.522988 64 18.970703 C 64 18.418418 63.552285 17.970703 63 17.970703 L 1 17.970703 z M 21 27.970703 C 20.447715 27.970703 20 28.418418 20 28.970703 C 20 29.522988 20.447715 29.970703 21 29.970703 L 69 29.970703 C 69.552285 29.970703 70 29.522988 70 28.970703 C 70 28.418418 69.552285 27.970703 69 27.970703 L 21 27.970703 z'/>
            </svg>
        </span>
    );
}