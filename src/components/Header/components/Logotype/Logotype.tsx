import * as React from "react";
import Icon, { IconProps } from "../../../icons/Icon";
import { Link } from "react-router-dom";

const Logotype: React.FC<IconProps> = (props) => {
  return (
    <div>
      <Link to="/">
        <Icon {...props} viewBox="0 0 120 36" width={120} height={35}>
          <path
            d="M12.0637 34.6486C9.84796 34.6486 7.86235 34.1321 6.1069 33.0991C4.35153 32.0374 2.95582 30.6027 1.91985 28.7949C0.912712 26.9872 0.409058 24.9498 0.409058 22.683C0.409058 20.3874 0.927043 18.3358 1.96301 16.5281C3.02782 14.7203 4.46661 13.2999 6.27956 12.2669C8.09251 11.2053 10.1357 10.6744 12.4091 10.6744C14.6825 10.6744 16.7113 11.2053 18.4954 12.2669C20.3083 13.2999 21.7328 14.7203 22.7688 16.5281C23.8336 18.3358 24.3803 20.3874 24.4091 22.683L23.0709 23.716C23.0709 25.782 22.5818 27.6472 21.6033 29.3114C20.6537 30.947 19.3444 32.2526 17.6752 33.2282C16.035 34.1751 14.1645 34.6486 12.0637 34.6486ZM12.4091 31.6357C14.0782 31.6357 15.5601 31.2483 16.8551 30.4735C18.1789 29.6988 19.2149 28.6371 19.963 27.2885C20.74 25.9111 21.1285 24.376 21.1285 22.683C21.1285 20.9613 20.74 19.4262 19.963 18.0776C19.2149 16.7289 18.1789 15.6672 16.8551 14.8925C15.5601 14.0891 14.0782 13.6873 12.4091 13.6873C10.7688 13.6873 9.28681 14.0891 7.96302 14.8925C6.6393 15.6672 5.58891 16.7289 4.81194 18.0776C4.03496 19.4262 3.64647 20.9613 3.64647 22.683C3.64647 24.376 4.03496 25.9111 4.81194 27.2885C5.58891 28.6371 6.6393 29.6988 7.96302 30.4735C9.28681 31.2483 10.7688 31.6357 12.4091 31.6357ZM22.7256 34.4334C22.2365 34.4334 21.8335 34.2899 21.517 34.0029C21.2005 33.6873 21.0421 33.2856 21.0421 32.7978V25.4377L21.8623 22.0374L24.4091 22.683V32.7978C24.4091 33.2856 24.2508 33.6873 23.9342 34.0029C23.6177 34.2899 23.2148 34.4334 22.7256 34.4334ZM41.6216 34.6486C39.3483 34.6486 37.3051 34.1321 35.4921 33.0991C33.6792 32.0374 32.2404 30.6027 31.1756 28.7949C30.1396 26.9872 29.6216 24.9355 29.6216 22.64C29.6216 20.3731 30.1253 18.3358 31.1324 16.5281C32.1684 14.7203 33.5641 13.2999 35.3195 12.2669C37.0749 11.2053 39.0605 10.6744 41.2763 10.6744C43.2044 10.6744 44.9454 11.0904 46.4993 11.9226C48.0533 12.726 49.3051 13.8021 50.2547 15.1507V2.49649C50.2547 1.98 50.4131 1.57827 50.7295 1.29133C51.0461 0.975688 51.449 0.817871 51.9382 0.817871C52.4274 0.817871 52.8303 0.975688 53.1468 1.29133C53.4634 1.57827 53.6216 1.98 53.6216 2.49649V22.8121C53.5641 25.0503 53.003 27.0732 51.9382 28.881C50.9022 30.6601 49.4777 32.0661 47.6648 33.0991C45.8807 34.1321 43.8662 34.6486 41.6216 34.6486ZM41.6216 31.6357C43.2908 31.6357 44.7727 31.2483 46.0677 30.4735C47.3915 29.6701 48.4274 28.5941 49.1756 27.2454C49.9526 25.8968 50.3411 24.3616 50.3411 22.64C50.3411 20.947 49.9526 19.4262 49.1756 18.0776C48.4274 16.7002 47.3915 15.6242 46.0677 14.8494C44.7727 14.0747 43.2908 13.6873 41.6216 13.6873C39.9813 13.6873 38.4994 14.0747 37.1756 14.8494C35.8519 15.6242 34.8015 16.7002 34.0245 18.0776C33.2475 19.4262 32.859 20.947 32.859 22.64C32.859 24.3616 33.2475 25.8968 34.0245 27.2454C34.8015 28.5941 35.8519 29.6701 37.1756 30.4735C38.4994 31.2483 39.9813 31.6357 41.6216 31.6357ZM72.0978 34.6486C69.7669 34.6486 67.695 34.1464 65.882 33.1421C64.0978 32.1091 62.6878 30.6887 61.6518 28.881C60.6446 27.0732 60.141 25.0073 60.141 22.683C60.141 20.3301 60.6158 18.2641 61.5655 16.485C62.5438 14.6773 63.882 13.2569 65.5798 12.2239C67.2776 11.1909 69.2345 10.6744 71.4503 10.6744C73.6374 10.6744 75.5366 11.1765 77.1482 12.1809C78.7882 13.1564 80.0547 14.5195 80.9465 16.2698C81.8392 18.0201 82.2846 20.0144 82.2846 22.2526C82.2846 22.7117 82.1413 23.0848 81.853 23.3717C81.5655 23.6299 81.1917 23.759 80.7307 23.759H62.3856V21.0044H81.076L79.2199 22.3387C79.2492 20.6744 78.9471 19.1823 78.3134 17.8623C77.6805 16.5424 76.774 15.5094 75.5942 14.7634C74.4431 14.0173 73.0618 13.6443 71.4503 13.6443C69.8101 13.6443 68.3712 14.0316 67.1338 14.8064C65.8963 15.5811 64.9324 16.6572 64.2417 18.0345C63.5798 19.3832 63.2489 20.9327 63.2489 22.683C63.2489 24.4333 63.623 25.9828 64.3712 27.3315C65.1482 28.6802 66.1985 29.7418 67.5223 30.5166C68.846 31.2913 70.3712 31.6787 72.0978 31.6787C73.1338 31.6787 74.1698 31.5065 75.2057 31.1622C76.2705 30.7892 77.1194 30.33 77.7523 29.7849C78.0691 29.5266 78.4291 29.3975 78.8314 29.3975C79.2346 29.3688 79.5799 29.4692 79.8674 29.6988C80.242 30.0431 80.4285 30.4161 80.4285 30.8179C80.4579 31.2196 80.299 31.564 79.9537 31.8509C79.004 32.6543 77.7954 33.3287 76.328 33.8738C74.8604 34.3903 73.4503 34.6486 72.0978 34.6486ZM93.0009 34.4334C91.8501 34.4334 90.8141 34.1177 89.893 33.4864C89.0012 32.8552 88.2958 31.98 87.7779 30.8609C87.2892 29.7418 87.044 28.4506 87.044 26.9872V2.45345C87.044 1.96565 87.1882 1.57827 87.4757 1.29133C87.7925 0.975688 88.1957 0.817871 88.6843 0.817871C89.1738 0.817871 89.5623 0.975688 89.8498 1.29133C90.1666 1.57827 90.3246 1.96565 90.3246 2.45345V26.9872C90.3246 28.221 90.5698 29.2253 91.0584 30.0001C91.5764 30.7748 92.2239 31.1622 93.0009 31.1622H94.08C94.5117 31.1622 94.857 31.32 95.116 31.6357C95.375 31.9226 95.5045 32.3099 95.5045 32.7978C95.5045 33.2856 95.318 33.6873 94.9433 34.0029C94.598 34.2899 94.1379 34.4334 93.562 34.4334H93.0009ZM109.488 34.6486C107.157 34.6486 105.085 34.1464 103.273 33.1421C101.488 32.1091 100.078 30.6887 99.0423 28.881C98.0348 27.0732 97.5315 25.0073 97.5315 22.683C97.5315 20.3301 98.0063 18.2641 98.956 16.485C99.9341 14.6773 101.272 13.2569 102.97 12.2239C104.668 11.1909 106.625 10.6744 108.841 10.6744C111.028 10.6744 112.927 11.1765 114.539 12.1809C116.179 13.1564 117.445 14.5195 118.337 16.2698C119.229 18.0201 119.675 20.0144 119.675 22.2526C119.675 22.7117 119.531 23.0848 119.244 23.3717C118.955 23.6299 118.582 23.759 118.121 23.759H99.7761V21.0044H118.467L116.611 22.3387C116.639 20.6744 116.337 19.1823 115.704 17.8623C115.071 16.5424 114.164 15.5094 112.985 14.7634C111.833 14.0173 110.452 13.6443 108.841 13.6443C107.201 13.6443 105.761 14.0316 104.524 14.8064C103.286 15.5811 102.323 16.6572 101.632 18.0345C100.97 19.3832 100.639 20.9327 100.639 22.683C100.639 24.4333 101.013 25.9828 101.762 27.3315C102.539 28.6802 103.589 29.7418 104.913 30.5166C106.236 31.2913 107.762 31.6787 109.488 31.6787C110.524 31.6787 111.56 31.5065 112.596 31.1622C113.661 30.7892 114.509 30.33 115.143 29.7849C115.459 29.5266 115.819 29.3975 116.222 29.3975C116.624 29.3688 116.97 29.4692 117.258 29.6988C117.632 30.0431 117.819 30.4161 117.819 30.8179C117.848 31.2196 117.69 31.564 117.344 31.8509C116.395 32.6543 115.186 33.3287 113.719 33.8738C112.251 34.3903 110.84 34.6486 109.488 34.6486Z"
            fill="#9155B1"
          />
          <path
            d="M77.2327 11.7571L77.7268 3.51058L81.407 4.62106L77.2327 11.7571Z"
            fill="#9155B1"
          />
        </Icon>
      </Link>
    </div>
  );
};

export default Logotype;