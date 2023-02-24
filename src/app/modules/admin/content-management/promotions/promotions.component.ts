import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { NgxGalleryAnimation, NgxGalleryOptions } from '@kolkov/ngx-gallery';

@Component({
    selector: 'promotions',
    templateUrl: './promotions.component.html',
    encapsulation: ViewEncapsulation.None,
    styles: [
        `
        
        `
    ]
})
export class PromotionsComponent {

    // Image part    
    files: {
        description: string,
        type: string,
        fileSource: any,
        selectedFileName: string,
        selectedFiles: any,
        recommendedImageWidth: string,
        recommendedImageHeight: string,
        selectedImageWidth: string,
        selectedImageHeight: string,
        toDelete: string[],
        toAdd: any[],
        isMultiple: boolean,
        galleryImages: any[],
        assetId: string,
        toDeleted: boolean
    }[];

    galleryOptionsBannerDesktop: NgxGalleryOptions[] = [];

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseConfirmationService: FuseConfirmationService
    ) {

    }

    ngOnInit(): void {
        // Logo & Banner
        this.files = [
            {
                description: "BannerDesktop",
                type: "BannerDesktopUrl",
                fileSource: null,
                selectedFileName: "",
                selectedFiles: null,
                recommendedImageWidth: "1110",
                recommendedImageHeight: "250",
                selectedImageWidth: "",
                selectedImageHeight: "",
                toDelete: [],
                toAdd: [],
                isMultiple: true,
                galleryImages: [],
                assetId: null,
                toDeleted: false
            }
        ];

        this.galleryOptionsBannerDesktop = [
            {
                preview: false,
                imageArrows: true,
                width: '780px',
                height: '210px',
                thumbnailsColumns: 6,
                imageAnimation: NgxGalleryAnimation.Slide,
                thumbnailsArrows: true,
                imageArrowsAutoHide: false,
                thumbnailsArrowsAutoHide: true,
                thumbnailsAutoHide: false,
                thumbnailActions: [
                    {
                        icon: 'fa fa-times-circle',
                        onClick: (event, index) => {

                            this.deleteBannerDesktop(event, index)
                        },
                    }
                ],
                // "imageSize": "contain",
                "previewCloseOnClick": true,
                "previewCloseOnEsc": true,
                // "thumbnailsRemainingCount": true
            },
            // max-width 767 Mobile configuration
            {
                breakpoint: 767,
                thumbnailsColumns: 3,
                thumbnailsAutoHide: false,
                width: '280px',
                height: '210px',
                imagePercent: 100,
                thumbnailsPercent: 30,
                thumbnailsMargin: 10,
                thumbnailMargin: 5,
                thumbnailActions: [
                    {
                        icon: 'fa fa-times-circle',
                        onClick: () => { },
                    }
                ]
            }
        ];
    }

    /**
    * 
    * @param event 
    */
    selectFiles(fileType, event: any): void {

        // find index of object this.files
        let index = this.files.findIndex(preview => preview.type === fileType);

        // set each of the attributes        
        if (event.target.files.length > 0) {
            this.files[index].fileSource = null;
            this.files[index].selectedFileName = "";
            this.files[index].selectedFiles = event.target.files;
        }

        let maxSize = 1048576;
        var maxSizeInMB = (maxSize / (1024 * 1024)).toFixed(2);
        if (this.files[index].selectedFiles[0].size > maxSize) {
            // Show a success message (it can also be an error message)
            const confirmation = this._fuseConfirmationService.open({
                title: 'Image size limit',
                message: 'Your uploaded image exceeds the maximum size of ' + maxSizeInMB + ' MB!',
                icon: {
                    show: true,
                    name: "image_not_supported",
                    color: "warn"
                },
                actions: {
                    confirm: {
                        label: 'OK',
                        color: "primary",
                    },
                    cancel: {
                        show: false,
                    },
                }
            });
            return;
        }

        if (this.files[index].selectedFiles && this.files[index].selectedFiles[0] && this.files[index].selectedFiles[0].size < maxSize) {
            const numberOfFiles = this.files[index].selectedFiles.length;
            for (let i = 0; i < numberOfFiles; i++) {
                const reader = new FileReader();

                reader.onload = (e: any) => {
                    if (this.files[index].isMultiple) {
                        if (index === 0) {
                            this.files[0].fileSource = e.target.result;
                            this.files[0].toAdd.push(event.target.files);

                            if (this.files[0].galleryImages.length < 3) {

                                this.files[0].galleryImages.unshift({
                                    small: '' + e.target.result,
                                    medium: '' + e.target.result,
                                    big: '' + e.target.result
                                });

                                var image = new Image();
                                image.src = e.target.result;

                                image.onload = (imageInfo: any) => {
                                    this.files[0].selectedImageWidth = imageInfo.path[0].width;
                                    this.files[0].selectedImageHeight = imageInfo.path[0].height;

                                    this._changeDetectorRef.markForCheck();
                                };
                            }
                            this._changeDetectorRef.markForCheck();

                        }
                    } else {

                        this.files[index].fileSource = e.target.result;

                        var image = new Image();
                        image.src = e.target.result;

                        image.onload = (imageInfo: any) => {
                            this.files[index].selectedImageWidth = imageInfo.path[0].width;
                            this.files[index].selectedImageHeight = imageInfo.path[0].height;

                            this._changeDetectorRef.markForCheck();
                        };
                    }

                    this._changeDetectorRef.markForCheck();
                };

                reader.readAsDataURL(this.files[index].selectedFiles[i]);
                this.files[index].selectedFileName = this.files[index].selectedFiles[i].name;
            }
        }
        if (this.files[0].selectedFiles) {
            this.files[0].toDeleted = false
        } else if (this.files[3].selectedFiles) {
            this.files[3].toDeleted = false
        }
        this._changeDetectorRef.markForCheck();
    }

    deleteBannerDesktop(e, index) {
        let assetId = this.files[0].galleryImages[index].assetId;

        this.files[0].toDelete.push(assetId);
        this.files[0].galleryImages.splice(index, 1);

        if (this.files[0].galleryImages.length < 1) {
            this.files[0].fileSource = null
        }
    }
}
