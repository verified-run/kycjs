import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a ServerRequest. */
export interface IServerRequest {

    /** ServerRequest id */
    id?: (string|null);

    /** ServerRequest verified */
    verified?: (boolean|null);

    /** ServerRequest finish */
    finish?: (ServerRequest.IFinish|null);

    /** ServerRequest faceText */
    faceText?: (ServerRequest.IFaceText|null);

    /** ServerRequest faceAgreement */
    faceAgreement?: (ServerRequest.IFaceAgreement|null);

    /** ServerRequest faceMovement */
    faceMovement?: (ServerRequest.IFaceMovement|null);

    /** ServerRequest idCard */
    idCard?: (ServerRequest.IIdCard|null);

    /** ServerRequest idCardSerial */
    idCardSerial?: (ServerRequest.IIdCardSerial|null);

    /** ServerRequest error */
    error?: (ServerRequest.IError|null);

    /** ServerRequest jobs */
    jobs?: (ServerRequest.IJobs|null);

    /** ServerRequest pong */
    pong?: (ServerRequest.IPong|null);
}

/** Represents a ServerRequest. */
export class ServerRequest implements IServerRequest {

    /**
     * Constructs a new ServerRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerRequest);

    /** ServerRequest id. */
    public id: string;

    /** ServerRequest verified. */
    public verified: boolean;

    /** ServerRequest finish. */
    public finish?: (ServerRequest.IFinish|null);

    /** ServerRequest faceText. */
    public faceText?: (ServerRequest.IFaceText|null);

    /** ServerRequest faceAgreement. */
    public faceAgreement?: (ServerRequest.IFaceAgreement|null);

    /** ServerRequest faceMovement. */
    public faceMovement?: (ServerRequest.IFaceMovement|null);

    /** ServerRequest idCard. */
    public idCard?: (ServerRequest.IIdCard|null);

    /** ServerRequest idCardSerial. */
    public idCardSerial?: (ServerRequest.IIdCardSerial|null);

    /** ServerRequest error. */
    public error?: (ServerRequest.IError|null);

    /** ServerRequest jobs. */
    public jobs?: (ServerRequest.IJobs|null);

    /** ServerRequest pong. */
    public pong?: (ServerRequest.IPong|null);

    /** ServerRequest data. */
    public data?: ("finish"|"faceText"|"faceAgreement"|"faceMovement"|"idCard"|"idCardSerial"|"error"|"jobs"|"pong");

    /**
     * Creates a new ServerRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerRequest instance
     */
    public static create(properties?: IServerRequest): ServerRequest;

    /**
     * Encodes the specified ServerRequest message. Does not implicitly {@link ServerRequest.verify|verify} messages.
     * @param message ServerRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServerRequest message, length delimited. Does not implicitly {@link ServerRequest.verify|verify} messages.
     * @param message ServerRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IServerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerRequest;

    /**
     * Decodes a ServerRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServerRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerRequest;

    /**
     * Verifies a ServerRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ServerRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerRequest
     */
    public static fromObject(object: { [k: string]: any }): ServerRequest;

    /**
     * Creates a plain object from a ServerRequest message. Also converts values to other types if specified.
     * @param message ServerRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ServerRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ServerRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace ServerRequest {

    /** Properties of a Finish. */
    interface IFinish {
    }

    /** Represents a Finish. */
    class Finish implements IFinish {

        /**
         * Constructs a new Finish.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerRequest.IFinish);

        /**
         * Creates a new Finish instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Finish instance
         */
        public static create(properties?: ServerRequest.IFinish): ServerRequest.Finish;

        /**
         * Encodes the specified Finish message. Does not implicitly {@link ServerRequest.Finish.verify|verify} messages.
         * @param message Finish message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerRequest.IFinish, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Finish message, length delimited. Does not implicitly {@link ServerRequest.Finish.verify|verify} messages.
         * @param message Finish message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerRequest.IFinish, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Finish message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Finish
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerRequest.Finish;

        /**
         * Decodes a Finish message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Finish
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerRequest.Finish;

        /**
         * Verifies a Finish message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Finish message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Finish
         */
        public static fromObject(object: { [k: string]: any }): ServerRequest.Finish;

        /**
         * Creates a plain object from a Finish message. Also converts values to other types if specified.
         * @param message Finish
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerRequest.Finish, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Finish to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Finish
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Job. */
    interface IJob {

        /** Job id */
        id?: (string|null);

        /** Job action */
        action?: (string|null);

        /** Job verified */
        verified?: (boolean|null);
    }

    /** Represents a Job. */
    class Job implements IJob {

        /**
         * Constructs a new Job.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerRequest.IJob);

        /** Job id. */
        public id: string;

        /** Job action. */
        public action: string;

        /** Job verified. */
        public verified: boolean;

        /**
         * Creates a new Job instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Job instance
         */
        public static create(properties?: ServerRequest.IJob): ServerRequest.Job;

        /**
         * Encodes the specified Job message. Does not implicitly {@link ServerRequest.Job.verify|verify} messages.
         * @param message Job message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerRequest.IJob, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Job message, length delimited. Does not implicitly {@link ServerRequest.Job.verify|verify} messages.
         * @param message Job message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerRequest.IJob, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Job message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Job
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerRequest.Job;

        /**
         * Decodes a Job message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Job
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerRequest.Job;

        /**
         * Verifies a Job message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Job message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Job
         */
        public static fromObject(object: { [k: string]: any }): ServerRequest.Job;

        /**
         * Creates a plain object from a Job message. Also converts values to other types if specified.
         * @param message Job
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerRequest.Job, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Job to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Job
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Jobs. */
    interface IJobs {

        /** Jobs job */
        job?: (ServerRequest.IJob[]|null);
    }

    /** Represents a Jobs. */
    class Jobs implements IJobs {

        /**
         * Constructs a new Jobs.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerRequest.IJobs);

        /** Jobs job. */
        public job: ServerRequest.IJob[];

        /**
         * Creates a new Jobs instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Jobs instance
         */
        public static create(properties?: ServerRequest.IJobs): ServerRequest.Jobs;

        /**
         * Encodes the specified Jobs message. Does not implicitly {@link ServerRequest.Jobs.verify|verify} messages.
         * @param message Jobs message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerRequest.IJobs, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Jobs message, length delimited. Does not implicitly {@link ServerRequest.Jobs.verify|verify} messages.
         * @param message Jobs message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerRequest.IJobs, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Jobs message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Jobs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerRequest.Jobs;

        /**
         * Decodes a Jobs message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Jobs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerRequest.Jobs;

        /**
         * Verifies a Jobs message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Jobs message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Jobs
         */
        public static fromObject(object: { [k: string]: any }): ServerRequest.Jobs;

        /**
         * Creates a plain object from a Jobs message. Also converts values to other types if specified.
         * @param message Jobs
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerRequest.Jobs, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Jobs to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Jobs
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FaceText. */
    interface IFaceText {

        /** FaceText text */
        text?: (string|null);
    }

    /** Represents a FaceText. */
    class FaceText implements IFaceText {

        /**
         * Constructs a new FaceText.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerRequest.IFaceText);

        /** FaceText text. */
        public text: string;

        /**
         * Creates a new FaceText instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FaceText instance
         */
        public static create(properties?: ServerRequest.IFaceText): ServerRequest.FaceText;

        /**
         * Encodes the specified FaceText message. Does not implicitly {@link ServerRequest.FaceText.verify|verify} messages.
         * @param message FaceText message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerRequest.IFaceText, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FaceText message, length delimited. Does not implicitly {@link ServerRequest.FaceText.verify|verify} messages.
         * @param message FaceText message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerRequest.IFaceText, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FaceText message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FaceText
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerRequest.FaceText;

        /**
         * Decodes a FaceText message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FaceText
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerRequest.FaceText;

        /**
         * Verifies a FaceText message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FaceText message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FaceText
         */
        public static fromObject(object: { [k: string]: any }): ServerRequest.FaceText;

        /**
         * Creates a plain object from a FaceText message. Also converts values to other types if specified.
         * @param message FaceText
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerRequest.FaceText, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FaceText to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FaceText
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FaceAgreement. */
    interface IFaceAgreement {

        /** FaceAgreement text */
        text?: (string|null);
    }

    /** Represents a FaceAgreement. */
    class FaceAgreement implements IFaceAgreement {

        /**
         * Constructs a new FaceAgreement.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerRequest.IFaceAgreement);

        /** FaceAgreement text. */
        public text: string;

        /**
         * Creates a new FaceAgreement instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FaceAgreement instance
         */
        public static create(properties?: ServerRequest.IFaceAgreement): ServerRequest.FaceAgreement;

        /**
         * Encodes the specified FaceAgreement message. Does not implicitly {@link ServerRequest.FaceAgreement.verify|verify} messages.
         * @param message FaceAgreement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerRequest.IFaceAgreement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FaceAgreement message, length delimited. Does not implicitly {@link ServerRequest.FaceAgreement.verify|verify} messages.
         * @param message FaceAgreement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerRequest.IFaceAgreement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FaceAgreement message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FaceAgreement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerRequest.FaceAgreement;

        /**
         * Decodes a FaceAgreement message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FaceAgreement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerRequest.FaceAgreement;

        /**
         * Verifies a FaceAgreement message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FaceAgreement message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FaceAgreement
         */
        public static fromObject(object: { [k: string]: any }): ServerRequest.FaceAgreement;

        /**
         * Creates a plain object from a FaceAgreement message. Also converts values to other types if specified.
         * @param message FaceAgreement
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerRequest.FaceAgreement, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FaceAgreement to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FaceAgreement
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FaceMovement. */
    interface IFaceMovement {

        /** FaceMovement directions */
        directions?: ({ [k: string]: ServerRequest.FaceMovement.Direction }|null);
    }

    /** Represents a FaceMovement. */
    class FaceMovement implements IFaceMovement {

        /**
         * Constructs a new FaceMovement.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerRequest.IFaceMovement);

        /** FaceMovement directions. */
        public directions: { [k: string]: ServerRequest.FaceMovement.Direction };

        /**
         * Creates a new FaceMovement instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FaceMovement instance
         */
        public static create(properties?: ServerRequest.IFaceMovement): ServerRequest.FaceMovement;

        /**
         * Encodes the specified FaceMovement message. Does not implicitly {@link ServerRequest.FaceMovement.verify|verify} messages.
         * @param message FaceMovement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerRequest.IFaceMovement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FaceMovement message, length delimited. Does not implicitly {@link ServerRequest.FaceMovement.verify|verify} messages.
         * @param message FaceMovement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerRequest.IFaceMovement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FaceMovement message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FaceMovement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerRequest.FaceMovement;

        /**
         * Decodes a FaceMovement message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FaceMovement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerRequest.FaceMovement;

        /**
         * Verifies a FaceMovement message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FaceMovement message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FaceMovement
         */
        public static fromObject(object: { [k: string]: any }): ServerRequest.FaceMovement;

        /**
         * Creates a plain object from a FaceMovement message. Also converts values to other types if specified.
         * @param message FaceMovement
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerRequest.FaceMovement, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FaceMovement to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FaceMovement
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace FaceMovement {

        /** Direction enum. */
        enum Direction {
            UP = 0,
            DOWN = 1,
            LEFT = 2,
            RIGHT = 3
        }
    }

    /** Properties of an IdCard. */
    interface IIdCard {

        /** IdCard placeholder */
        placeholder?: (string|null);
    }

    /** Represents an IdCard. */
    class IdCard implements IIdCard {

        /**
         * Constructs a new IdCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerRequest.IIdCard);

        /** IdCard placeholder. */
        public placeholder: string;

        /**
         * Creates a new IdCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IdCard instance
         */
        public static create(properties?: ServerRequest.IIdCard): ServerRequest.IdCard;

        /**
         * Encodes the specified IdCard message. Does not implicitly {@link ServerRequest.IdCard.verify|verify} messages.
         * @param message IdCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerRequest.IIdCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IdCard message, length delimited. Does not implicitly {@link ServerRequest.IdCard.verify|verify} messages.
         * @param message IdCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerRequest.IIdCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IdCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IdCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerRequest.IdCard;

        /**
         * Decodes an IdCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IdCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerRequest.IdCard;

        /**
         * Verifies an IdCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IdCard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IdCard
         */
        public static fromObject(object: { [k: string]: any }): ServerRequest.IdCard;

        /**
         * Creates a plain object from an IdCard message. Also converts values to other types if specified.
         * @param message IdCard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerRequest.IdCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IdCard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for IdCard
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an IdCardSerial. */
    interface IIdCardSerial {
    }

    /** Represents an IdCardSerial. */
    class IdCardSerial implements IIdCardSerial {

        /**
         * Constructs a new IdCardSerial.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerRequest.IIdCardSerial);

        /**
         * Creates a new IdCardSerial instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IdCardSerial instance
         */
        public static create(properties?: ServerRequest.IIdCardSerial): ServerRequest.IdCardSerial;

        /**
         * Encodes the specified IdCardSerial message. Does not implicitly {@link ServerRequest.IdCardSerial.verify|verify} messages.
         * @param message IdCardSerial message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerRequest.IIdCardSerial, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IdCardSerial message, length delimited. Does not implicitly {@link ServerRequest.IdCardSerial.verify|verify} messages.
         * @param message IdCardSerial message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerRequest.IIdCardSerial, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IdCardSerial message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IdCardSerial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerRequest.IdCardSerial;

        /**
         * Decodes an IdCardSerial message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IdCardSerial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerRequest.IdCardSerial;

        /**
         * Verifies an IdCardSerial message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IdCardSerial message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IdCardSerial
         */
        public static fromObject(object: { [k: string]: any }): ServerRequest.IdCardSerial;

        /**
         * Creates a plain object from an IdCardSerial message. Also converts values to other types if specified.
         * @param message IdCardSerial
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerRequest.IdCardSerial, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IdCardSerial to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for IdCardSerial
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Error. */
    interface IError {

        /** Error code */
        code?: (string|null);

        /** Error Message */
        Message?: (string|null);
    }

    /** Represents an Error. */
    class Error implements IError {

        /**
         * Constructs a new Error.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerRequest.IError);

        /** Error code. */
        public code: string;

        /** Error Message. */
        public Message: string;

        /**
         * Creates a new Error instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Error instance
         */
        public static create(properties?: ServerRequest.IError): ServerRequest.Error;

        /**
         * Encodes the specified Error message. Does not implicitly {@link ServerRequest.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerRequest.IError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link ServerRequest.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerRequest.IError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerRequest.Error;

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerRequest.Error;

        /**
         * Verifies an Error message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Error
         */
        public static fromObject(object: { [k: string]: any }): ServerRequest.Error;

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @param message Error
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerRequest.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Error to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Error
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Pong. */
    interface IPong {
    }

    /** Represents a Pong. */
    class Pong implements IPong {

        /**
         * Constructs a new Pong.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerRequest.IPong);

        /**
         * Creates a new Pong instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Pong instance
         */
        public static create(properties?: ServerRequest.IPong): ServerRequest.Pong;

        /**
         * Encodes the specified Pong message. Does not implicitly {@link ServerRequest.Pong.verify|verify} messages.
         * @param message Pong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerRequest.IPong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Pong message, length delimited. Does not implicitly {@link ServerRequest.Pong.verify|verify} messages.
         * @param message Pong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerRequest.IPong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pong message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Pong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerRequest.Pong;

        /**
         * Decodes a Pong message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Pong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerRequest.Pong;

        /**
         * Verifies a Pong message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Pong message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Pong
         */
        public static fromObject(object: { [k: string]: any }): ServerRequest.Pong;

        /**
         * Creates a plain object from a Pong message. Also converts values to other types if specified.
         * @param message Pong
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerRequest.Pong, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Pong to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Pong
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a ServerRequestList. */
export interface IServerRequestList {

    /** ServerRequestList serverRequests */
    serverRequests?: (IServerRequest[]|null);
}

/** Represents a ServerRequestList. */
export class ServerRequestList implements IServerRequestList {

    /**
     * Constructs a new ServerRequestList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IServerRequestList);

    /** ServerRequestList serverRequests. */
    public serverRequests: IServerRequest[];

    /**
     * Creates a new ServerRequestList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ServerRequestList instance
     */
    public static create(properties?: IServerRequestList): ServerRequestList;

    /**
     * Encodes the specified ServerRequestList message. Does not implicitly {@link ServerRequestList.verify|verify} messages.
     * @param message ServerRequestList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IServerRequestList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ServerRequestList message, length delimited. Does not implicitly {@link ServerRequestList.verify|verify} messages.
     * @param message ServerRequestList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IServerRequestList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ServerRequestList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ServerRequestList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerRequestList;

    /**
     * Decodes a ServerRequestList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ServerRequestList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerRequestList;

    /**
     * Verifies a ServerRequestList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ServerRequestList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ServerRequestList
     */
    public static fromObject(object: { [k: string]: any }): ServerRequestList;

    /**
     * Creates a plain object from a ServerRequestList message. Also converts values to other types if specified.
     * @param message ServerRequestList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ServerRequestList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ServerRequestList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ServerRequestList
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ClientRequest. */
export interface IClientRequest {

    /** ClientRequest id */
    id?: (string|null);

    /** ClientRequest start */
    start?: (ClientRequest.IStart|null);

    /** ClientRequest faceText */
    faceText?: (ClientRequest.IFaceText|null);

    /** ClientRequest faceAgreement */
    faceAgreement?: (ClientRequest.IFaceAgreement|null);

    /** ClientRequest faceMovement */
    faceMovement?: (ClientRequest.IFaceMovement|null);

    /** ClientRequest idCard */
    idCard?: (ClientRequest.IIdCard|null);

    /** ClientRequest idCardSerial */
    idCardSerial?: (ClientRequest.IIdCardSerial|null);

    /** ClientRequest error */
    error?: (ClientRequest.IError|null);

    /** ClientRequest ping */
    ping?: (ClientRequest.IPing|null);
}

/** Represents a ClientRequest. */
export class ClientRequest implements IClientRequest {

    /**
     * Constructs a new ClientRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientRequest);

    /** ClientRequest id. */
    public id: string;

    /** ClientRequest start. */
    public start?: (ClientRequest.IStart|null);

    /** ClientRequest faceText. */
    public faceText?: (ClientRequest.IFaceText|null);

    /** ClientRequest faceAgreement. */
    public faceAgreement?: (ClientRequest.IFaceAgreement|null);

    /** ClientRequest faceMovement. */
    public faceMovement?: (ClientRequest.IFaceMovement|null);

    /** ClientRequest idCard. */
    public idCard?: (ClientRequest.IIdCard|null);

    /** ClientRequest idCardSerial. */
    public idCardSerial?: (ClientRequest.IIdCardSerial|null);

    /** ClientRequest error. */
    public error?: (ClientRequest.IError|null);

    /** ClientRequest ping. */
    public ping?: (ClientRequest.IPing|null);

    /** ClientRequest data. */
    public data?: ("start"|"faceText"|"faceAgreement"|"faceMovement"|"idCard"|"idCardSerial"|"error"|"ping");

    /**
     * Creates a new ClientRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientRequest instance
     */
    public static create(properties?: IClientRequest): ClientRequest;

    /**
     * Encodes the specified ClientRequest message. Does not implicitly {@link ClientRequest.verify|verify} messages.
     * @param message ClientRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientRequest message, length delimited. Does not implicitly {@link ClientRequest.verify|verify} messages.
     * @param message ClientRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClientRequest;

    /**
     * Decodes a ClientRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClientRequest;

    /**
     * Verifies a ClientRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClientRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientRequest
     */
    public static fromObject(object: { [k: string]: any }): ClientRequest;

    /**
     * Creates a plain object from a ClientRequest message. Also converts values to other types if specified.
     * @param message ClientRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClientRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClientRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ClientRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace ClientRequest {

    /** Properties of a Start. */
    interface IStart {

        /** Start identifier */
        identifier?: (string|null);

        /** Start appName */
        appName?: (string|null);

        /** Start packageName */
        packageName?: (string|null);

        /** Start manufacturer */
        manufacturer?: (string|null);

        /** Start platform */
        platform?: (string|null);

        /** Start platformVersion */
        platformVersion?: (string|null);
    }

    /** Represents a Start. */
    class Start implements IStart {

        /**
         * Constructs a new Start.
         * @param [properties] Properties to set
         */
        constructor(properties?: ClientRequest.IStart);

        /** Start identifier. */
        public identifier: string;

        /** Start appName. */
        public appName: string;

        /** Start packageName. */
        public packageName: string;

        /** Start manufacturer. */
        public manufacturer: string;

        /** Start platform. */
        public platform: string;

        /** Start platformVersion. */
        public platformVersion: string;

        /**
         * Creates a new Start instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Start instance
         */
        public static create(properties?: ClientRequest.IStart): ClientRequest.Start;

        /**
         * Encodes the specified Start message. Does not implicitly {@link ClientRequest.Start.verify|verify} messages.
         * @param message Start message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ClientRequest.IStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Start message, length delimited. Does not implicitly {@link ClientRequest.Start.verify|verify} messages.
         * @param message Start message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ClientRequest.IStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Start message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Start
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClientRequest.Start;

        /**
         * Decodes a Start message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Start
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClientRequest.Start;

        /**
         * Verifies a Start message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Start message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Start
         */
        public static fromObject(object: { [k: string]: any }): ClientRequest.Start;

        /**
         * Creates a plain object from a Start message. Also converts values to other types if specified.
         * @param message Start
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ClientRequest.Start, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Start to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Start
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FaceText. */
    interface IFaceText {

        /** FaceText video */
        video?: (Uint8Array|null);
    }

    /** Represents a FaceText. */
    class FaceText implements IFaceText {

        /**
         * Constructs a new FaceText.
         * @param [properties] Properties to set
         */
        constructor(properties?: ClientRequest.IFaceText);

        /** FaceText video. */
        public video: Uint8Array;

        /**
         * Creates a new FaceText instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FaceText instance
         */
        public static create(properties?: ClientRequest.IFaceText): ClientRequest.FaceText;

        /**
         * Encodes the specified FaceText message. Does not implicitly {@link ClientRequest.FaceText.verify|verify} messages.
         * @param message FaceText message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ClientRequest.IFaceText, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FaceText message, length delimited. Does not implicitly {@link ClientRequest.FaceText.verify|verify} messages.
         * @param message FaceText message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ClientRequest.IFaceText, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FaceText message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FaceText
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClientRequest.FaceText;

        /**
         * Decodes a FaceText message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FaceText
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClientRequest.FaceText;

        /**
         * Verifies a FaceText message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FaceText message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FaceText
         */
        public static fromObject(object: { [k: string]: any }): ClientRequest.FaceText;

        /**
         * Creates a plain object from a FaceText message. Also converts values to other types if specified.
         * @param message FaceText
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ClientRequest.FaceText, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FaceText to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FaceText
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FaceAgreement. */
    interface IFaceAgreement {

        /** FaceAgreement video */
        video?: (Uint8Array|null);
    }

    /** Represents a FaceAgreement. */
    class FaceAgreement implements IFaceAgreement {

        /**
         * Constructs a new FaceAgreement.
         * @param [properties] Properties to set
         */
        constructor(properties?: ClientRequest.IFaceAgreement);

        /** FaceAgreement video. */
        public video: Uint8Array;

        /**
         * Creates a new FaceAgreement instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FaceAgreement instance
         */
        public static create(properties?: ClientRequest.IFaceAgreement): ClientRequest.FaceAgreement;

        /**
         * Encodes the specified FaceAgreement message. Does not implicitly {@link ClientRequest.FaceAgreement.verify|verify} messages.
         * @param message FaceAgreement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ClientRequest.IFaceAgreement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FaceAgreement message, length delimited. Does not implicitly {@link ClientRequest.FaceAgreement.verify|verify} messages.
         * @param message FaceAgreement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ClientRequest.IFaceAgreement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FaceAgreement message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FaceAgreement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClientRequest.FaceAgreement;

        /**
         * Decodes a FaceAgreement message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FaceAgreement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClientRequest.FaceAgreement;

        /**
         * Verifies a FaceAgreement message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FaceAgreement message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FaceAgreement
         */
        public static fromObject(object: { [k: string]: any }): ClientRequest.FaceAgreement;

        /**
         * Creates a plain object from a FaceAgreement message. Also converts values to other types if specified.
         * @param message FaceAgreement
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ClientRequest.FaceAgreement, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FaceAgreement to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FaceAgreement
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FaceMovement. */
    interface IFaceMovement {

        /** FaceMovement video */
        video?: (Uint8Array|null);
    }

    /** Represents a FaceMovement. */
    class FaceMovement implements IFaceMovement {

        /**
         * Constructs a new FaceMovement.
         * @param [properties] Properties to set
         */
        constructor(properties?: ClientRequest.IFaceMovement);

        /** FaceMovement video. */
        public video: Uint8Array;

        /**
         * Creates a new FaceMovement instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FaceMovement instance
         */
        public static create(properties?: ClientRequest.IFaceMovement): ClientRequest.FaceMovement;

        /**
         * Encodes the specified FaceMovement message. Does not implicitly {@link ClientRequest.FaceMovement.verify|verify} messages.
         * @param message FaceMovement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ClientRequest.IFaceMovement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FaceMovement message, length delimited. Does not implicitly {@link ClientRequest.FaceMovement.verify|verify} messages.
         * @param message FaceMovement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ClientRequest.IFaceMovement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FaceMovement message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FaceMovement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClientRequest.FaceMovement;

        /**
         * Decodes a FaceMovement message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FaceMovement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClientRequest.FaceMovement;

        /**
         * Verifies a FaceMovement message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FaceMovement message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FaceMovement
         */
        public static fromObject(object: { [k: string]: any }): ClientRequest.FaceMovement;

        /**
         * Creates a plain object from a FaceMovement message. Also converts values to other types if specified.
         * @param message FaceMovement
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ClientRequest.FaceMovement, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FaceMovement to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FaceMovement
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an IdCard. */
    interface IIdCard {

        /** IdCard image */
        image?: (Uint8Array|null);

        /** IdCard faceBox */
        faceBox?: (ClientRequest.Ibox|null);
    }

    /** Represents an IdCard. */
    class IdCard implements IIdCard {

        /**
         * Constructs a new IdCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: ClientRequest.IIdCard);

        /** IdCard image. */
        public image: Uint8Array;

        /** IdCard faceBox. */
        public faceBox?: (ClientRequest.Ibox|null);

        /**
         * Creates a new IdCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IdCard instance
         */
        public static create(properties?: ClientRequest.IIdCard): ClientRequest.IdCard;

        /**
         * Encodes the specified IdCard message. Does not implicitly {@link ClientRequest.IdCard.verify|verify} messages.
         * @param message IdCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ClientRequest.IIdCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IdCard message, length delimited. Does not implicitly {@link ClientRequest.IdCard.verify|verify} messages.
         * @param message IdCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ClientRequest.IIdCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IdCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IdCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClientRequest.IdCard;

        /**
         * Decodes an IdCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IdCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClientRequest.IdCard;

        /**
         * Verifies an IdCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IdCard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IdCard
         */
        public static fromObject(object: { [k: string]: any }): ClientRequest.IdCard;

        /**
         * Creates a plain object from an IdCard message. Also converts values to other types if specified.
         * @param message IdCard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ClientRequest.IdCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IdCard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for IdCard
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an IdCardSerial. */
    interface IIdCardSerial {

        /** IdCardSerial serial */
        serial?: (string|null);
    }

    /** Represents an IdCardSerial. */
    class IdCardSerial implements IIdCardSerial {

        /**
         * Constructs a new IdCardSerial.
         * @param [properties] Properties to set
         */
        constructor(properties?: ClientRequest.IIdCardSerial);

        /** IdCardSerial serial. */
        public serial: string;

        /**
         * Creates a new IdCardSerial instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IdCardSerial instance
         */
        public static create(properties?: ClientRequest.IIdCardSerial): ClientRequest.IdCardSerial;

        /**
         * Encodes the specified IdCardSerial message. Does not implicitly {@link ClientRequest.IdCardSerial.verify|verify} messages.
         * @param message IdCardSerial message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ClientRequest.IIdCardSerial, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IdCardSerial message, length delimited. Does not implicitly {@link ClientRequest.IdCardSerial.verify|verify} messages.
         * @param message IdCardSerial message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ClientRequest.IIdCardSerial, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IdCardSerial message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IdCardSerial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClientRequest.IdCardSerial;

        /**
         * Decodes an IdCardSerial message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IdCardSerial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClientRequest.IdCardSerial;

        /**
         * Verifies an IdCardSerial message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IdCardSerial message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IdCardSerial
         */
        public static fromObject(object: { [k: string]: any }): ClientRequest.IdCardSerial;

        /**
         * Creates a plain object from an IdCardSerial message. Also converts values to other types if specified.
         * @param message IdCardSerial
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ClientRequest.IdCardSerial, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IdCardSerial to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for IdCardSerial
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a box. */
    interface Ibox {

        /** box x */
        x?: (number|null);

        /** box y */
        y?: (number|null);

        /** box w */
        w?: (number|null);

        /** box h */
        h?: (number|null);
    }

    /** Represents a box. */
    class box implements Ibox {

        /**
         * Constructs a new box.
         * @param [properties] Properties to set
         */
        constructor(properties?: ClientRequest.Ibox);

        /** box x. */
        public x: number;

        /** box y. */
        public y: number;

        /** box w. */
        public w: number;

        /** box h. */
        public h: number;

        /**
         * Creates a new box instance using the specified properties.
         * @param [properties] Properties to set
         * @returns box instance
         */
        public static create(properties?: ClientRequest.Ibox): ClientRequest.box;

        /**
         * Encodes the specified box message. Does not implicitly {@link ClientRequest.box.verify|verify} messages.
         * @param message box message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ClientRequest.Ibox, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified box message, length delimited. Does not implicitly {@link ClientRequest.box.verify|verify} messages.
         * @param message box message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ClientRequest.Ibox, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a box message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns box
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClientRequest.box;

        /**
         * Decodes a box message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns box
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClientRequest.box;

        /**
         * Verifies a box message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a box message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns box
         */
        public static fromObject(object: { [k: string]: any }): ClientRequest.box;

        /**
         * Creates a plain object from a box message. Also converts values to other types if specified.
         * @param message box
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ClientRequest.box, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this box to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for box
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Error. */
    interface IError {

        /** Error code */
        code?: (string|null);

        /** Error Message */
        Message?: (string|null);
    }

    /** Represents an Error. */
    class Error implements IError {

        /**
         * Constructs a new Error.
         * @param [properties] Properties to set
         */
        constructor(properties?: ClientRequest.IError);

        /** Error code. */
        public code: string;

        /** Error Message. */
        public Message: string;

        /**
         * Creates a new Error instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Error instance
         */
        public static create(properties?: ClientRequest.IError): ClientRequest.Error;

        /**
         * Encodes the specified Error message. Does not implicitly {@link ClientRequest.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ClientRequest.IError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link ClientRequest.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ClientRequest.IError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClientRequest.Error;

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClientRequest.Error;

        /**
         * Verifies an Error message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Error
         */
        public static fromObject(object: { [k: string]: any }): ClientRequest.Error;

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @param message Error
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ClientRequest.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Error to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Error
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Ping. */
    interface IPing {
    }

    /** Represents a Ping. */
    class Ping implements IPing {

        /**
         * Constructs a new Ping.
         * @param [properties] Properties to set
         */
        constructor(properties?: ClientRequest.IPing);

        /**
         * Creates a new Ping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ping instance
         */
        public static create(properties?: ClientRequest.IPing): ClientRequest.Ping;

        /**
         * Encodes the specified Ping message. Does not implicitly {@link ClientRequest.Ping.verify|verify} messages.
         * @param message Ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ClientRequest.IPing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Ping message, length delimited. Does not implicitly {@link ClientRequest.Ping.verify|verify} messages.
         * @param message Ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ClientRequest.IPing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Ping message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClientRequest.Ping;

        /**
         * Decodes a Ping message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClientRequest.Ping;

        /**
         * Verifies a Ping message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Ping message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Ping
         */
        public static fromObject(object: { [k: string]: any }): ClientRequest.Ping;

        /**
         * Creates a plain object from a Ping message. Also converts values to other types if specified.
         * @param message Ping
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ClientRequest.Ping, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Ping to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Ping
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
