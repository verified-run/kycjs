import * as Long from "long";

/** Properties of a ServerRequest. */
export interface IServerRequest {

    /** ServerRequest id */
    id?: (string|null);

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

    /** ServerRequest error */
    error?: (ServerRequest.IError|null);
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

    /** ServerRequest error. */
    public error?: (ServerRequest.IError|null);

    /** ServerRequest data. */
    public data?: ("finish"|"faceText"|"faceAgreement"|"faceMovement"|"idCard"|"error");

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
    }

    /** Properties of an Identifier. */
    interface IIdentifier {

        /** Identifier identifier */
        identifier?: (string|null);
    }

    /** Represents an Identifier. */
    class Identifier implements IIdentifier {

        /**
         * Constructs a new Identifier.
         * @param [properties] Properties to set
         */
        constructor(properties?: ServerRequest.IIdentifier);

        /** Identifier identifier. */
        public identifier: string;

        /**
         * Creates a new Identifier instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Identifier instance
         */
        public static create(properties?: ServerRequest.IIdentifier): ServerRequest.Identifier;

        /**
         * Encodes the specified Identifier message. Does not implicitly {@link ServerRequest.Identifier.verify|verify} messages.
         * @param message Identifier message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ServerRequest.IIdentifier, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Identifier message, length delimited. Does not implicitly {@link ServerRequest.Identifier.verify|verify} messages.
         * @param message Identifier message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ServerRequest.IIdentifier, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Identifier message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Identifier
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ServerRequest.Identifier;

        /**
         * Decodes an Identifier message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Identifier
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ServerRequest.Identifier;

        /**
         * Verifies an Identifier message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Identifier message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Identifier
         */
        public static fromObject(object: { [k: string]: any }): ServerRequest.Identifier;

        /**
         * Creates a plain object from an Identifier message. Also converts values to other types if specified.
         * @param message Identifier
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ServerRequest.Identifier, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Identifier to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
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
    }
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

    /** ClientRequest error */
    error?: (ClientRequest.IError|null);
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

    /** ClientRequest error. */
    public error?: (ClientRequest.IError|null);

    /** ClientRequest data. */
    public data?: ("start"|"faceText"|"faceAgreement"|"faceMovement"|"idCard"|"error");

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
}

export namespace ClientRequest {

    /** Properties of a Start. */
    interface IStart {

        /** Start identifier */
        identifier?: (string|null);
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
    }
}
